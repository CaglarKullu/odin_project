import { Observable } from 'rxjs';

interface UseStreamQueryResult<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export declare const useStreamQuery: <T>(observable: Observable<T>) => UseStreamQueryResult<T>;
