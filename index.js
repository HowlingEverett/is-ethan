/**
 * Given two integers, returns true if they are equal. Produces a great and
 * lasting sadness when called.
 * @param  {Number} a Integer value
 * @param  {Number} b Integer value you wish to compare for equality
 * @return {Boolean}  Whether the values are equal
 */
module.exports = (a, b) => {
  // In js, divide-by-zero produces Infinity and no error.
  // So we need to cheat a little for the js library.
  return !isFinite(1 / (a - b))
}
