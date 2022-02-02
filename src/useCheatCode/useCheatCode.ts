import React from 'react';

const defaultCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

/**
 * A hook for executing the specified call back when once a user enters the configured sequence. Defaults to the
 * 'Konami' code (↑ ↑ ↓ ↓ ← → ← → B A). Touch swipes are translated into their 'Arrow' code counterparts, and taps are
 * interchangeable with any other keyboard key.
 */
function useCheatCode(callback: () => void, { code = defaultCode } = {}) {
  let timer: NodeJS.Timeout | null = null;
  let inputList: Array<string> = [];
  let startX = 0;
  let startY = 0;
  let diffX = 0;
  let diffY = 0;

  /**
   * Logs the passed input to the sequence and (re)starts timer as appropriate
   */
  const logInput = (key: string): void => {
    /** push the key to our list */
    inputList.push(key);
    checkMatch();
    /** reset the timer if it already exists */
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    /** create a new timer */
     // @ts-ignore:
    timer = setTimeout(() => (inputList = []), 2000);
  };

  /**
   * Determines how to log the last touch gesture based on the distance traveled on X and Y axes.
   * Logs directional gestures as their 'Arrow' counterparts and all others as 'Tap'.
   */
  const handleGesture = (): void => {
    const ratioX = Math.abs(diffX / diffY);
    const ratioY = Math.abs(diffY / diffX);
    const absDiff = Math.abs(ratioX > ratioY ? diffX : diffY);

    if (absDiff < 30) return logInput('Tap');

    if (ratioX > ratioY) {
      if (diffX >= 0) return logInput('ArrowRight');
      return logInput('ArrowLeft');
    } else {
      if (diffY >= 0) return logInput('ArrowDown');
      return logInput('ArrowUp');
    }
  };

  /** on keyup, just log the code directly */
  const onKeyUp = (event: KeyboardEvent): void => logInput(event.code);

  /** on touchstart, save the starting point of the touch event */
  const onTouchStart = (event: TouchEvent): void => {
    startX = event.changedTouches[0].screenX;
    startY = event.changedTouches[0].screenY;
  };

  /** when touch ends, save the differences from the starting point and call handler */
  const onTouchEnd = (event: TouchEvent): void => {
    diffX = event.changedTouches[0].screenX - startX;
    diffY = event.changedTouches[0].screenY - startY;
    handleGesture();
  };

  /**
   * Check to see if the input from the user matches the code and trigger our action if it does.
   */
  const checkMatch = (): void => {
    const inputString = inputList.join('');
    const codeString = code.join('');
    if (
      inputString === codeString ||
      inputString === codeString.replace(/Key./g, 'Tap')
    ) {
      callback
        ? callback()
        : console.log(
            'Cheat code was entered, however no callback was provided.'
          );
    }
  };

  /** set all our listeners when mounted, and clean them up with unmounted */
  React.useEffect(() => {
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchend', onTouchEnd);
    return (): void => {
      document.removeEventListener('keyup', onKeyUp);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [onKeyUp]);
}

export default useCheatCode;
