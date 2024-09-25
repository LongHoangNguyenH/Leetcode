(function() {
    var a = b = 5;
})();

console.log(b);

// function func() {
//   var a = b = 5;
// }                                    Error b is not defined
// console.log(func(b));

//output: 5
// Đoạn code bạn đưa ra là một ví dụ về IIFE (Immediately Invoked Function Expression),
// hay còn gọi là biểu thức hàm được gọi ngay lập tức. Đây là một kỹ thuật phổ biến trong JavaScript để tạo ra một phạm vi
// (scope) riêng biệt cho các biến và hàm, giúp tránh xung đột tên biến và đảm bảo tính đóng gói (encapsulation) của code.

// Hàm ẩn danh:

// (function() { ... })() là một hàm không có tên (anonymous function).
// Đặt hàm trong cặp ngoặc đơn () sẽ tạo ra một biểu thức hàm.
// Cặp ngoặc đơn () sau hàm sẽ ngay lập tức gọi hàm đó.
// Phạm vi:

// Hàm IIFE tạo ra một phạm vi riêng biệt.
// Bất kỳ biến nào được khai báo bên trong hàm này chỉ tồn tại trong phạm vi đó
// và không thể truy cập từ bên ngoài.
