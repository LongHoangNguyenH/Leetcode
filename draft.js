const a = { num: 0, valueOf: () => this.num++ };
console.log(a == 1); // true
console.log(a === 1); // false (vì a là một đối tượng, 1 là một số)