export function toCamel(str: string): string | undefined {
    if(str === undefined) return undefined;
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}