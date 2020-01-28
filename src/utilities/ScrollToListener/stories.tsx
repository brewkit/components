/* eslint-disable no-console */
import React, { ReactElement } from 'react';
import ScrollToListener from './index';


export default {
    component: ScrollToListener,
    title: 'Utilities|ScrollToListener',
};


export const Default = (): ReactElement => {
    const fire = (): void => console.log('scrolled to every time');
    const fireOnce = (): void => console.log('scrolled to once');


    const parentStyles = {
        backgroundColor: 'rebeccapurple',
        display: 'flex',
        height: '1500px',
        justifyContent: 'center',
        width: '1000px',
    };


    const childStyles = {
        backgroundColor: 'pink',
        height: '50px',
        width: '100px',
    };


    return (
        <div style={parentStyles}>
            <div style={{ alignSelf: 'center' }}>
                <ScrollToListener onScrollTo={fireOnce}>
                    <div style={childStyles}>Fires callback once</div>
                </ScrollToListener>
                <br />
                <br />
                <ScrollToListener onScrollTo={fire} willListen>
                    <div style={childStyles}>FIres callback on each pass</div>
                </ScrollToListener>
            </div>
        </div>
    );


};


export const Threshold = (): ReactElement => {
    const fire = (): void => console.log('scrolled to');
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const threshold = [0, 0.25, 0.50, 0.75];


    const parentStyles = {
        backgroundColor: 'rebeccapurple',
        display: 'flex',
        height: '200px',
        justifyContent: 'center',
        overflow: 'scroll',
        width: '200px',
    };


    const childStyles = {
        backgroundColor: 'pink',
        height: '50px',
        width: '100px',
    };


    const listenerStyles = {
        backgroundColor: 'red',
        height: '200px',
        width: '100px',
    };


    return (
        <div style={parentStyles}>
            <div>
                {list.map((child: number) => <div key={child} style={childStyles}>child</div>)}
                <ScrollToListener onScrollTo={fire} rootThreshold={threshold}>
                    <div style={listenerStyles}>HELLO WORLD</div>
                </ScrollToListener>
                {list.map((child: number) => <div key={child} style={childStyles}>child</div>)}
            </div>
        </div>
    );


};


export const RootElement = (): ReactElement => {
    const fire = (): void => console.log('I\'m visible!');
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const threshold = [0, 0.25, 0.50, 0.75];


    const parentStyles = {
        backgroundColor: 'rebeccapurple',
        display: 'flex',
        height: '200px',
        justifyContent: 'center',
        overflow: 'scroll',
        width: '200px',
    };


    const childStyles = {
        backgroundColor: 'pink',
        height: '50px',
        width: '100px',
    };


    const listenerStyles = {
        backgroundColor: 'red',
        height: '200px',
        width: '100px',
    };


    return (
        <div id="root-element" style={parentStyles}>
            <div>
                {list.map((child: number) => <div key={child} style={childStyles}>child</div>)}
                <ScrollToListener onScrollTo={fire} rootElement="#root-element" rootThreshold={threshold}>
                    <div style={listenerStyles}>HELLO WORLD</div>
                </ScrollToListener>
                {list.map((child: number) => <div key={child} style={childStyles}>child</div>)}
            </div>
        </div>
    );


};
