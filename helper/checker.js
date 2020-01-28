/**
 * Determine if a value is an empty
 *
 * @param {any} data The value to test
 * @returns {boolean} True if value is an empty, otherwise false
 */
function isEmpty(data) {
  if (typeof data === "string" && !data) {
    return true;
  } else if (typeof data === "number" && Number.isNaN(data)) {
    return true;
  } else if (
    typeof data === "object" &&
    data &&
    Object.keys(data).length === 0
  ) {
    return true;
  } else if (!data && typeof data !== "number") {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isEmpty: isEmpty
};
