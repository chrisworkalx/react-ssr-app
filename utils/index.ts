


export const isBrowser = !!process.browser;


export const isPromise = (target: any): target is Promise<any> => {
    return typeof target?.then === 'function' && typeof target?.catch === 'function' && typeof target?.finally === 'function';
}