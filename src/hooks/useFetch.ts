import { useState, useEffect, useCallback } from 'react';

const useFetch = <T>(
  defaultState: T,
  query: () => T,
): { isLoading: boolean; response: T; error: string } => {
  const [response, setResponse] = useState<T>(defaultState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    try {
      setError('');
      setResponse(await query());
      setIsLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      setError('неизвестная ошибка');
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, response, error };
};

export { useFetch };
