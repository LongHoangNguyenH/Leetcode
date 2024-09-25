const a = {
    num: 0,
    valueOf() {
      return this.num++;
    }
  };
  
  const equality = (a === 1 && a === 2 && a === 3); //đây là biểu thức so sánh
  console.log(equality); // Output: false

// Lần so sánh thứ nhất (a == 1):
// JavaScript gọi phương thức valueOf() của đối tượng a.
// Giá trị của num tăng lên 1 và trở thành 1.
// a == 1 trả về true.
// Lần so sánh thứ hai (a == 2):
// valueOf() được gọi lại, num tăng lên 2.
// a == 2 cũng trả về true.
// Lần so sánh thứ ba (a == 3):
// valueOf() được gọi lần nữa, num tăng lên 3.
// a == 3 cũng trả về true.
// 4. Toán tử &&:

// Toán tử && (và) sẽ trả về true chỉ khi tất cả các biểu thức con đều là true.
// Trong trường hợp này, mặc dù mỗi lần so sánh riêng lẻ đều trả về true, nhưng không có thời điểm nào 
// mà a đồng thời bằng 1, 2 và 3 cùng một lúc.
// 5. Kết quả cuối cùng:

// Vì ít nhất một phép so sánh là sai (ví dụ, khi a đã bằng 2 thì không thể bằng 1 nữa), 
// nên toàn bộ biểu thức a == 1 && a == 2 && a == 3 sẽ trả về false.