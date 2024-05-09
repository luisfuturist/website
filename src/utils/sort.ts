export function sortByDate<T extends object>(array: T[], prop: keyof T) {
  array.sort((a, b) => {
    const timeA = new Date(a[prop] as any).getTime();
    const timeB = new Date(b[prop] as any).getTime();

    return timeB - timeA;
  });
}
