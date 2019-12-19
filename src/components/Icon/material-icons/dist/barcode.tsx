import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <path
                d="M2 6h1v12H2zM4 6h2v12H4zM8 6h1v12H8zM10 6h3v12h-3zM14 6h1v12h-1zM17 6h1v12h-1zM19 6h1v12h-1zM21 6h1v12h-1z"
                fill-rule="evenodd"
            />
        </React.Fragment>
    );
}

export default SVG;
