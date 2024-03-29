/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string 
has sufficient space at the end to hold the additional characters, and that you are given the "true" 
length of the string. (Note: If implementing in Java, please use a character array so that you can 
perform this operation in place.) 
*/

const urlify = (s) => {
  return s.trim().replace(/\s/g, '%20')
}

module.exports = urlify
