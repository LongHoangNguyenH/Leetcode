// Hoisting là cơ chế mặc định của JavaScript để di chuyển tất cả các biến và hàm khi khai báo lên đầu scope 
// trước khi chúng được thực thi.
// Lưu ý đối với cơ chế này nó chỉ di chuyển khai báo, còn việc gán giá trị thì giữ nguyên.


doSomething();

function doSomething() {
  x = 33;
  console.log(x);
}
var x;
