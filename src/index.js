module.exports = function reverse (n) {
  let string_n = String(Math.abs(n));
  let array_n = string_n.split('');
  array_n.reverse();
  return Number(array_n.join(''));
}
