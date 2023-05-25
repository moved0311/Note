/*
String Compression: Implement a method to perform basic string compression using the counts 
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the 
"compressed" string would not become smaller than the original string, your method should return 
the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
*/
const stringCompression = (str) => {
  let res = ''
  let count = 0
  for (let i = 0; i < str.length; i++) {
    count += 1
    if (str[i] !== str[i + 1] || i + 1 >= str.length) {
      res += `${str[i]}${count}`
      count = 0
    }
  }
  return res.length < str.length ? res : str
}
// time complexity : O(n)
// space complexity: O(n)

module.exports = stringCompression
