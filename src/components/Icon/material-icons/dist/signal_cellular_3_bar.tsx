import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <path fill-opacity=".3" d="M2 22h20V2L2 22z" />
            <path d="M17 7L2 22h15V7z" />
        </React.Fragment>
    );
}

export default SVG;
