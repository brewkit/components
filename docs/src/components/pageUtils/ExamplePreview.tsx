import React from 'react';
import { withoutFile } from 'docs/utils/path';

type ExamplePreviewProps = {
    file: string;
    path: string;
};

const getRelativeFilePath = (path: string): string => {
    const i = path.indexOf('pages');
    return withoutFile(path.slice(i));
};

const ExamplePreview = ({ file, path }: ExamplePreviewProps) => {
    const [Component, setComp] =
        React.useState<React.LazyExoticComponent<any> | null>(null);

    React.useEffect(() => {
        const cleanFile = file.slice(2).slice(0, -2);
        const importDest = `${getRelativeFilePath(path)}/examples/${cleanFile}`;
        try {
            const loadedComp = React.lazy(
                () => import(/* @vite-ignore */ `../../${importDest}`),
            );
            setComp(loadedComp);
        } catch (error) {
            throw new Error(`Unable to resolve component path - ${importDest}`);
        }
    }, []);

    if (Component) {
        return <Component />;
    }

    return <React.Fragment />;
};

export default ExamplePreview;
