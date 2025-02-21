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
