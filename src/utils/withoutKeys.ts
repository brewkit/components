/**
 * Exclude keys from object, then return new one
 */
export function withoutKeys<T extends Record<string, string>>(
    obj: T,
    exclude: Partial<keyof T>[],
) {
    return Object.entries(obj).reduce(
        (acc, [key, value]: [key: keyof T, value: any]) => {
            if (!exclude.includes(key)) {
                acc[key] = value;
            }
            return acc;
        },
        {} as T,
    );
}
