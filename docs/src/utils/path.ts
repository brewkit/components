export function getFileName(path: string): string {
    const split = path.split('/');
    const fileWithExt = split[split.length - 1];
    const fileWoExt = fileWithExt.split('.')[0];
    return fileWoExt;
}

export function withoutFile(path: string): string {
    return path
        .split('/')
        .slice(0, path.split('/').length - 1)
        .join('/');
}

export function getFileExt(path: string): string {
    return path.split('/')[path.split('/').length - 1].split('.')[1];
}
