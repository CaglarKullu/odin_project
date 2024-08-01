import { StateNotifier } from './StateNotifier';

declare const connectToDevTools: <T>(notifier: StateNotifier<T>) => void;

export = connectToDevTools;
