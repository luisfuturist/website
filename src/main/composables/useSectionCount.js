let count = 0;

export function useSectionCount() {
    count++;

    return {
        count,
    };
}