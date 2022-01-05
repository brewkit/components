import parse from 'node-html-parser';

export function getTitle(html: string) {
    return parse(html).querySelector('h1')?.innerHTML;
}
