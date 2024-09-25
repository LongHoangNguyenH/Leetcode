const obj = {
    value: 42,
    getValue: function() {
      return this.value;
    }
  };
  
  const anotherObj = {
    value: 99
  };
  
  console.log(obj.getValue());
  console.log(obj.getValue.call(anotherObj));

// obj: Có thuộc tính value là 42 và phương thức getValue(). 
// Phương thức này trả về giá trị của thuộc tính value của đối tượng hiện tại (được xác định bởi this).
// anotherObj: Có thuộc tính value là 99.
// Gọi phương thức getValue():

// console.log(obj.getValue());:
// Ở đây, this bên trong phương thức getValue() sẽ trỏ đến đối tượng obj vì phương thức được gọi trực tiếp trên obj.
// Do đó, kết quả sẽ là 42.
// console.log(obj.getValue.call(anotherObj));:
// Ở đây, chúng ta sử dụng call() để gọi phương thức getValue() với anotherObj làm ngữ cảnh (this).
// Khi đó, this bên trong phương thức sẽ trỏ đến anotherObj.
// Do đó, kết quả sẽ là 99.
// Kết quả:

// console.log(obj.getValue()); sẽ in ra 42.
// console.log(obj.getValue.call(anotherObj)); sẽ in ra 99.
// Đáp án:

// Vậy đáp án đúng là B. 42, 99.

// Giải thích chi tiết hơn về call():

// call() là một phương thức của các hàm trong JavaScript. 
// Nó cho phép bạn gọi một hàm với một ngữ cảnh this được chỉ định.
// Cú pháp: function.call(thisArg, arg1, arg2, ...).
// thisArg: Giá trị sẽ được gán cho this bên trong hàm khi được gọi.
// arg1, arg2, ...: Các đối số truyền vào hàm.
// Tổng kết:

// Đoạn code này minh họa cách sử dụng call() để thay đổi ngữ cảnh this khi gọi một phương thức. Điều này rất hữu ích khi bạn muốn sử dụng một phương thức của một đối tượng trong một đối tượng khác.

// Các khái niệm quan trọng:

// this: Một đối tượng đặc biệt trong JavaScript, nó tham chiếu đến đối tượng hiện tại đang thực thi một hàm.
// call(): Một phương thức cho phép bạn gọi một hàm với một ngữ cảnh this được chỉ định.