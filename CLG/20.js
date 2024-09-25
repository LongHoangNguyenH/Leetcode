function sum(x, y) {
    // Kiểm tra xem y có được truyền vào hay không
    if (y !== undefined) {
        return x + y; // Nếu có, trả về tổng
    }
    // Nếu chỉ có x, trả về hàm nhận tham số y
    return function(y) {
        return x + y;
    };
}

console.log(sum(2)(3))
console.log(sum(2,3))