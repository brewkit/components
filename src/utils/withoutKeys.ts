/** Preserve key when using object entries
 *  https://stackoverflow.com/questions/62053739/preserve-type-when-using-object-entries
 */
type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

function objectEntries<T extends object>(t: T): Entries<T>[] {
    return Object.entries(t) as never;
}

/**
 * Exclude keys from object, then return new one
 */
export default function withoutKeys<T extends { [P in keyof T]: T[P] }>(
    obj: T,
    exclude: (keyof T)[],
) {
    return objectEntries(obj).reduce((acc, [key, value]) => {
        if (!exclude.includes(key)) {
            acc[key] = value;
        }
        return acc;
    }, {} as T);
}

withoutKeys({ a: 1, b: 2 }, ['a']);
