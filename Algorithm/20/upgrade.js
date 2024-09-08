var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
        stack.push(map[s[i]])
    }else{
        let last = stack.pop();
        if(s[i] !== last){
            return false;
        }
    }
  }
  return !stack.length;
};

console.log(isValid("()[]{}}"));
