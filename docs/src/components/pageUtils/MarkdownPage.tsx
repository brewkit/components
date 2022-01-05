import React, { useEffect, useState } from 'react';
import TurndownService from 'turndown';
import ReactMarkdown from 'react-markdown';
import { Link as MUILink } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import CodeExample from './CodeExample';
import ExamplePreview from './ExamplePreview';

type MarkdownMeta = {
    html: string;
};

type MarkdownPageProps = {
    data: MarkdownMeta;
    path: string;
};

const MarkdownPage = ({ data, path }: MarkdownPageProps) => {
    const [markdown, setMarkdown] = useState<any>('');

    useEffect(() => {
        const turndownService = new TurndownService();
        const converted = turndownService.turndown(data?.html);
        setMarkdown(converted);
    }, [data]);

    return (
        <ReactMarkdown
            children={markdown || ''}
            components={{
                a: ({ children, href }) => {
                    const isExternal = href?.startsWith('http');

                    if (isExternal) {
                        return (
                            <MUILink target="_blank" href={href}>
                                {children}
                            </MUILink>
                        );
                    }

                    return <RouterLink to={href || ''}>{children}</RouterLink>;
                },
                code: ({ children, ...props }) => {
                    return <CodeExample {...props} children={children} />;
                },
                p: ({ children, ...props }) => {
                    const node = String(children?.[0]);
                    if (
                        children.length === 1 &&
                        node.startsWith('{{') &&
                        node.endsWith('}}')
                    ) {
                        return (
                            <ExamplePreview
                                {...props}
                                path={path}
                                file={node}
                            />
                        );
                    }
                    return <p {...props}>{children}</p>;
                },
            }}
        />
    );
};

export default MarkdownPage;
