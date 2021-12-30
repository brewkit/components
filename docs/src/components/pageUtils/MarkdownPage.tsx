import React, { useEffect, useState } from 'react';
import TurndownService from 'turndown';
import ReactMarkdown from 'react-markdown';
import CodeExample from './CodeExample';
import ExamplePreview from './ExamplePreview';

type MarkdownPageProps = {
    filePath: string;
};

type MarkdownMeta = {
    data: string;
    path: string;
};

const MarkdownPage = ({ filePath }: MarkdownPageProps) => {
    const [markdownData, setMarkdownData] = useState<MarkdownMeta>({
        data: '',
        path: '',
    });

    useEffect(() => {
        (async () => {
            try {
                const {
                    default: { html, path },
                } = await import(
                    /* @vite-ignore */ `../../${filePath.slice(3)}`
                );

                const turndownService = new TurndownService();
                const raw = turndownService.turndown(html);

                setMarkdownData({ data: raw, path });
            } catch (error) {
                throw new Error('Unable to get markdown contents ' + error);
            }
        })();
    }, [filePath]);

    return (
        <ReactMarkdown
            children={markdownData?.data || ''}
            components={{
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
                                path={markdownData?.path}
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
