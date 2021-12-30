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

function formatName(name: string = ''): string {
    return capitalize(name).split('-').join(' ');
}

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
        const sharedProps = {
            ...entry,
            rawPath: path,
            isMarkdown,
        };

        if (!hasBase) {
            acc.push(
                {
                    ...sharedProps,
                    name: formatName(entry.base),
                    path: undefined,
                },
                {
                    ...sharedProps,
                    name: formatName(entry.name),
                },
            );
        } else {
            acc.push({
                ...sharedProps,
                name: formatName(entry.name),
            });
        }

        return acc;
    }, []);
}
