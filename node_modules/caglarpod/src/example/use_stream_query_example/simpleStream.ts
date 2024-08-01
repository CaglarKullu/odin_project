import { Observable } from 'rxjs';

let count = 0;

export const createSimpleObservable = (): Observable<{ count: number }> => {
  return new Observable(subscriber => {
    const intervalId = setInterval(() => {
      count += 1;
      subscriber.next({ count });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });
};
