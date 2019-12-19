import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <path fill-opacity=".3" d="M2 22h20V2L2 22z" />
            <path d="M12 12L2 22h10V12z" />
        </React.Fragment>
    );
}

export default SVG;
