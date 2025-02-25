import moment from "moment";

/**
 * Format option date
 * @function
 * @param {string} originalDate - The original date to format
 * @param {TypeFormatDate} formatDateType - The format type to use
 * @returns {string} The formatted date
 */
export const formatOptionDate = (
  originalDate: string,
  formatDateType: TypeFormatDate,
) => {
  if (originalDate) {
    return moment(originalDate).format(formatDateType);
  }
  return "-";
};

/**
 * Compress image
 * @function
 * @param {string} base64 - The base64 string of the image
 * @param {number} maxWidth - The maximum width of the compressed image
 * @returns {Promise<string>} The compressed image as a base64 string
 */
export const compressImage = (
  base64: string,
  maxWidth = 800,
): Promise<string> =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = base64;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ratio = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * ratio;

      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      resolve(canvas.toDataURL("image/jpeg", 0.7));
    };
  });

/**
 * Replaces substrings in a string based on a mapping object.
 *
 * @param {string} str - The original string in which replacements will be made.
 * @param {Object} mapObj - An object where keys are the substrings to be replaced, and values are the corresponding replacement strings.
 *
 * @description
 * This function takes a string and a mapping object, and returns a new string where all occurrences of keys in the mapping object are replaced with their corresponding values.
 * It constructs a regular expression from the keys of the mapping object and uses it to perform case-insensitive replacements in the original string.
 */
export const replaceString = (str: string, mapObj: any) => {
  if (!str) {
    return str;
  }
  const re = new RegExp(Object.keys(mapObj).join("|"), "gi");

  return str.replace(re, (matched: string) => mapObj[matched]);
};

/**
 * Formats a date string to a specific format.
 *
 * @param {string} date - The date string to be formatted.
 * @returns {string} The formatted date string.
 *
 * @example
 * formatMessageTime("2024-10-19T14:08:34.000Z") // returns "14:08"
 */
export const formatMessageTime = (date: string) =>
  new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
