(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
  })();