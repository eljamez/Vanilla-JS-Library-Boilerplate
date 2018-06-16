/**
 * @var count
 * @description the count with which to track
 */
let count = 0

/**
 * @function getCount
 * @returns {Number} the value of the variable "count"
 * @description gets the value of count
 */
export function getCount () {
  return count
}

/**
 * @function setCount
 * @param {Number} value - the new value of the variable "count"
 * @description sets the new value of "count"
 */
export function setCount (value) {
  count = value
}

/**
 * @function increment
 * @description increments the value of count by 1
 */
export function increment () {
  count++
}

/**
 * @function decrement
 * @description decrements the value of count by 1
 */
export function decrement () {
  count--
}
