import React from 'react';
import { render } from 'react-dom';
import Main from 'docs/components/layout/Main';
import { resolvePaths } from 'docs/utils/routes';

(async () => {
    const data = await resolvePaths();
    render(<Main routes={data} />, document.getElementById('app'));
})();
