import { StateNotifier } from './StateNotifier';

type Selector<T, U> = (state: T) => U;

export declare const useStateSelector: <T, U>(notifier: StateNotifier<T>, selector: Selector<T, U>) => U;
