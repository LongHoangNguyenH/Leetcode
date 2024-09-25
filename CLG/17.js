let x = "10";
x += x++;  //gán trước rồi mới tăng x
console.log(x);

// x++: Tăng giá trị của x lên 1 đơn vị sau khi
// sử dụng giá trị hiện tại của x trong phép toán.
// x += x++: Gán giá trị mới của x (là "10" vì x++ trả về giá trị cũ) 
// cộng với giá trị cũ của x (cũng là "10") cho biến x. Kết quả là chuỗi "1010".

// x++ là phép tăng giá trị của x sau khi sử dụng giá trị hiện tại của nó. 
// Do đó, giá trị của x++ sẽ là "10" (giá trị ban đầu) 
// và sau đó x sẽ được tăng lên thành 11 (nhưng vẫn là chuỗi).
// Phép gán x += sẽ thực hiện phép nối chuỗi. Vì x hiện tại là "10" và x++ cũng trả về "10", 
