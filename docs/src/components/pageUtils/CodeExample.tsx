import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeProps } from 'react-markdown/lib/ast-to-react';

interface CodeExampleProps extends CodeProps {
    children: React.ReactNode & React.ReactNode[];
    file: string;
    path: string;
}

const CodeExample = ({ children }: CodeExampleProps) => {
    return (
        <React.Fragment>
            <SyntaxHighlighter
                useInlineStyles
                style={materialOceanic}
                language="typescript">
                {children}
            </SyntaxHighlighter>
        </React.Fragment>
    );
};

export default CodeExample;
