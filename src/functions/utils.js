/**
 * Check Array
 * @param {*} arr
 */
export function isArray(arr) {
    if (arr && Array.isArray(arr) && arr.length > 0) return true
    else return false
}