import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <path
                d="M17.5 17.5L9.25 12l8.25-5.5-1-1.5L6 12l10.5 7z"
                fill-rule="evenodd"
            />
        </React.Fragment>
    );
}

export default SVG;
