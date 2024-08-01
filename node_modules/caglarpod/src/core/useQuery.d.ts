import { UseQueryOptions, UseQueryResult } from 'react-query';

export declare const useQuery: <TData = unknown, TError = unknown>(
  key: string,
  queryFn: () => Promise<TData>,
  options?: UseQueryOptions<TData, TError>
) => UseQueryResult<TData, TError>;
