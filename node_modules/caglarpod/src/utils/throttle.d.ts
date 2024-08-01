export declare const throttle: <T extends (...args: any[]) => void>(func: T, limit: number) => T;
export declare const debounce: <T extends (...args: any[]) => void>(func: T, delay: number) => T;
