import { capitalize, kebabCase } from 'lodash';
import React from 'react';
import { getTitle } from './mdUtils';
import { getFileExt, getFileName } from './path';

// @ts-ignore
// This is the main entry for scanning all the files into the app
const files = import.meta.glob('../pages/**/*.{tsx,md,ts}');

function getFilesContext(ctx: string): string {
    // @ts-ignore
    return import.meta.glob(`../${ctx}`);
}

export interface RouteMapEntry {
    /**
     * Either a markdown string or component loaded with React.lazy
     */
    contents: { html: string };

    /**
     * Child routes
     */
    children?: RouteMapEntry[];

    /**
     * Base path. Used for categorization
     */
    base: string;

    /**
     * Resolved file path
     */
    path?: string;

    /**
     * Is markdown file
     */
    isMarkdown: boolean;

    /**
     * File name without extension
     */
    name: string;

    /**
     * Is file in root directory
     */
    inRootDir: boolean;

    /**
     * Path from import.meta.glob
     */
    rawPath: string;
}

function formatName(name: string = ''): string {
    return capitalize(name).split('-').join(' ');
}

/**
 * Create entry from scanned path, resolve file with 'import' if markdown
 * or React.lazy if its ts or tsx extension
 */
async function createEntry(path: string): Promise<RouteMapEntry> {
    const segments = path.split('/').slice(2);
    const file = kebabCase(
        path === 'index.tsx'
            ? getFileName(path.slice(path.length, 9))
            : getFileName(path),
    ).toLowerCase();

    const root = kebabCase(segments[0]);
    const isMarkdown = getFileExt(path) === 'md';
    const inRootDir = segments.length === 1;
    const resolvePath = inRootDir
        ? file === 'index'
            ? '/'
            : `/${file}`
        : `${root}/${file}`;
    let contents;

    try {
        if (isMarkdown) {
            const fileData = await import(
                /* @vite-ignore */ `../${path.slice(3)}`
            );
            contents = fileData?.default;
        } else if (!path.includes('examples')) {
            const fileData = React.lazy(
                () => import(/* @vite-ignore */ `../${path.slice(3)}`),
            );
            contents = fileData;
        }
    } catch (error) {
        throw new Error(`Unable to resolve file on path: ${path}: ${error}`);
    }

    return {
        base: root,
        contents,
        isMarkdown,
        name: capitalize(file),
        inRootDir,
        path: resolvePath,
        rawPath: path,
    };
}

/**
 * Resolve all paths before bootstraping an app.
 * The advantage of this approach is primarily for markdown files
 * to be parsed before app render occurs. This way we can manipulate
 * and extract all the necessary data from the markdown files in runtime
 * as we see fit.
 */
export function resolvePaths() {
    return Object.entries(files).reduce<Promise<RouteMapEntry[]>>(
        async (acc, [path]) => {
            const entry = await createEntry(path);
            const accPromise = await acc;
            const parent = (await acc).find(({ base }) => base === entry.base);

            // Exclude all the code examples .tsx files
            if (path.includes('examples')) {
                return acc;
            }

            if (!parent) {
                accPromise.push({
                    ...entry,
                    children: [entry],
                    name: formatName(entry.base),
                    path: undefined,
                });
            } else {
                parent.children = [
                    ...(parent?.children || []),
                    {
                        ...entry,
                        name: entry.name,
                    },
                ];
            }

            return acc;
        },
        Promise.resolve([]),
    );
}

export interface FlatPaths extends Exclude<RouteMapEntry, 'children'> {}

export function flatPaths(paths: RouteMapEntry[]) {
    return paths.reduce<FlatPaths[]>((acc, { children }) => {
        acc = [...acc, ...(children || [])];
        return acc;
    }, []);
}
