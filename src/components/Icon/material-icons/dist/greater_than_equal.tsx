import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <path
                d="M6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10 7.5 17z"
                fill-rule="evenodd"
            />
            <path fill-rule="nonzero" d="M18 20.998H6v-2h12z" />
        </React.Fragment>
    );
}

export default SVG;
