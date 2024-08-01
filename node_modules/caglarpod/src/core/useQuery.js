import { useQuery as useReactQuery } from 'react-query';
import { handleError } from '../utils/errorHandler';

export const useQuery = (key, queryFn, options) => {
  return useReactQuery(key, queryFn, {
    ...options,
    onError: error => {
      handleError(error, `useQuery ${key}`);
      if (options?.onError) {
        options.onError(error);
      }
    },
  });
};

export default useQuery;
