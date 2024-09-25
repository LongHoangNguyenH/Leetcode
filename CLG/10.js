function returnNum(num) {
    if (num <= 1) {
        return 1;
    } else {
        return returnNum(num - 1) + returnNum(num - 2);
    }
}

console.log(returnNum(5));
//vẽ cây
