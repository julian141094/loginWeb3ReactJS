/**
 * @name hex
 * @description transform to hex any number
 * @param number d
 * @returns string
 */
export const hex = (d) => `0x${Number(d).toString(16).padStart(2, "0")}`;
