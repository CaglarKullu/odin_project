import { UseMutationOptions, UseMutationResult } from 'react-query';

export declare const useMutation: <TData = unknown, TError = unknown, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, TError, TVariables>
) => UseMutationResult<TData, TError, TVariables>;
