import React, { ReactNode, ReactElement } from 'react';
import ReactDOM from 'react-dom';


function Portal({ children }: { children?: ReactNode }): ReactElement {
    return ReactDOM.createPortal(children, document.body);
}

export default Portal;