import { RouteMapEntry } from 'docs/utils/routes';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MarkdownPage from '../pageUtils/MarkdownPage';
import NotFound from './NotFound';

export default function SetupRoutes({ routes }: { routes: RouteMapEntry[] }) {
    return (
        <React.Suspense fallback="">
            <Routes>
                {routes.map(({ path, name, isMarkdown, rawPath }) => {
                    const Component = React.lazy(
                        () => import(/* @vite-ignore */ `../${rawPath}`),
                    );

                    if (isMarkdown) {
                        return (
                            <Route
                                path={path}
                                key={name}
                                element={<MarkdownPage filePath={rawPath} />}
                            />
                        );
                    }

                    if (Component) {
                        return (
                            <Route
                                path={path}
                                key={name}
                                element={<Component />}
                            />
                        );
                    }
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Suspense>
    );
}
