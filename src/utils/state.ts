type QueryResult<T> = {
    data: T | null;
    error: unknown | null;
};

type QueryOptions = {
    onError?: (error: unknown) => void;
};

export async function query<T>(
    fn: () => Promise<T>,
    options: QueryOptions = {}
): Promise<QueryResult<T>> {
    try {
        return { data: await fn(), error: null };
    } catch (error) {
        options.onError?.(error);
        return { error, data: null };
    }
}
