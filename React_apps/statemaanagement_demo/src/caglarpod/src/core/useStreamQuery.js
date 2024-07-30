import { useState, useEffect } from 'react';
import { handleError } from '../utils/errorHandler';

export const useStreamQuery = observable => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscription = observable.subscribe({
      next: result => {
        setData(result);
        setIsLoading(false);
      },
      error: err => {
        handleError(err, 'useStreamQuery');
        setError(err);
        setIsLoading(false);
      },
    });

    return () => subscription.unsubscribe();
  }, [observable]);

  return { data, error, isLoading };
};

export default useStreamQuery;
