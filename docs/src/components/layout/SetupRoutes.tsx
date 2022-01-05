import { flatPaths, RouteMapEntry } from 'docs/utils/routes';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MarkdownPage from '../pageUtils/MarkdownPage';
import NotFound from './NotFound';

export default function SetupRoutes({ routes }: { routes: RouteMapEntry[] }) {
    return (
        <React.Suspense fallback="">
            <Routes>
                {flatPaths(routes).map(
                    ({ path, contents, name, isMarkdown, rawPath }) => {
                        if (isMarkdown) {
                            return (
                                <Route
                                    path={path}
                                    key={path + name}
                                    element={
                                        <MarkdownPage
                                            // @ts-ignore
                                            data={contents}
                                            path={rawPath}
                                        />
                                    }
                                />
                            );
                        }

                        const Component = contents;

                        return (
                            // @ts-ignore
                            <Route
                                path={path}
                                key={name}
                                element={<Component />}
                            />
                        );
                    },
                )}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Suspense>
    );
}
