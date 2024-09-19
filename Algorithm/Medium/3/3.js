/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = "";
  let temp = "";
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    if (!temp.includes(s[i])) temp += s[i];
    else {
      if (temp.length > result.length) {
        result = temp;
      }

      temp = "";
      temp += s[i];
    }
  }
  return result.length;
};

s = " ";
console.log(lengthOfLongestSubstring(s));
