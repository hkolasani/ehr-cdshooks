'use strict';

export function deNull(inp:string) {
    return inp == null ? "" : inp
}

/** 
 * This is for JSON.stringify's second arguement to handler any circular references.
 * @returns 
 */
 export const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};  
