for (var i = 0; i < 4; i++) {
  // biến i ở đây là globally in loop
    setTimeout(() => console.log(i), 0);
}

//output: 4 4 4 4 

//if we change to let like this

for (let i = 0; i < 4; i++) {
  // block scope
  setTimeout(() => console.log(i), 0);
}

//output: 0 1 2 3