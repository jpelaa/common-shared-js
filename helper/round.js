/**
 * @param {number} value
 * @param {number} value
 * @returns {number} 
 */
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
