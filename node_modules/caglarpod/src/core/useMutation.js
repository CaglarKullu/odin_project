import { useMutation as useReactMutation } from 'react-query';
import { handleError } from '../utils/errorHandler';

const useMutation = (mutationFn, options) => {
  return useReactMutation(mutationFn, {
    ...options,
    onError: (error, variables, context) => {
      handleError(error, 'useMutation');
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
  });
};

export default useMutation;
