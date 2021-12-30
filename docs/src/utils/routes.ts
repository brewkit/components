import { capitalize, kebabCase } from 'lodash';
import { getFileExt, getFileName } from './path';

export interface RouteMapEntry {
    base?: string;
    path?: string;
    isMarkdown: boolean;
    name: string;
    rawPath: string;
}

// @ts-ignore
const files = import.meta.glob('../pages/**/*.{tsx,md}');

function createEntry(path: string): Partial<RouteMapEntry> {
    const segments = path.split('/').slice(2);
    const file =
        path === 'index.tsx'
            ? getFileName(path.slice(path.length, 9))
            : getFileName(path);

    const root = kebabCase(segments[0]);

    return {
        base: root,
        name: capitalize(file),
        path: `${root}/${kebabCase(file)}`.toLowerCase(),
    };
}

export function createRoutesMap() {
    return Object.entries(files).reduce<RouteMapEntry[]>((acc, [path]) => {
        const entry = createEntry(path);
        const hasBase = acc.find(({ base }) => base === entry.base);

        if (path.includes('examples')) {
            return acc;
        }

        const isMarkdown = getFileExt(path) === 'md';

        if (!hasBase) {
            acc.push(
                {
                    ...entry,
                    name: capitalize(entry.base).split('-').join(' '),
                    path: undefined,
                    rawPath: path,
                    isMarkdown,
                },
                {
                    ...entry,
                    name: capitalize(entry.name).split('-').join(' '),
                    rawPath: path,
                    isMarkdown,
                },
            );
        } else {
            acc.push({
                ...entry,
                name: capitalize(entry.name).split('-').join(' '),
                rawPath: path,
                isMarkdown,
            });
        }

        return acc;
    }, []);
}
