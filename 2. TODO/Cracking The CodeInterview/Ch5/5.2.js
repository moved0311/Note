/*
Binary to String: Given a real number between O and 1 (e.g., 0.72) that is passed in as a double, print the binary representation. If the number cannot be represented accurately in binary with at most 32 characters, print "ERROR:'
*/
const binaryToSring = (num) => {
  const MAX_BIT = 32;
  let idx = 0;
  let v = 1;
  let res = "0.";
  while (num > 0 && idx <= MAX_BIT) {
    v = v / 2;
    if (num >= v) {
      num -= v;
      res += 1;
    } else {
      res += 0;
    }
    idx += 1;
  }
  if (idx > MAX_BIT) {
    return "ERROR";
  } else {
    return res;
  }
};
module.exports = binaryToSring;
