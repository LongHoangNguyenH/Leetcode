var a = {},
    b = { key: 'b' },
    c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// Khai báo các đối tượng:

// a, b, c đều là các đối tượng (object) rỗng ban đầu.
// b và c có một thuộc tính key với giá trị lần lượt là 'b' và 'c'.
// Gán giá trị cho đối tượng a:

// a[b] = 123;: Dòng này cố gắng gán giá trị 123 cho một thuộc tính của đối tượng a. 
// Tuy nhiên, thay vì sử dụng một chuỗi làm tên thuộc tính, chúng ta đang sử dụng đối tượng b.
// JavaScript sẽ tự động gọi phương thức toString() của đối tượng b để chuyển đổi nó thành một chuỗi. 
// Trong trường hợp này, kết quả của b.toString() thường là [object Object].
// Do đó, thực tế là chúng ta đang gán giá trị 123 cho thuộc tính có tên là [object Object] của đối tượng a.
// Tương tự, a[c] = 456; cũng sẽ gán giá trị 456 cho một thuộc tính có tên là [object Object].
// In ra kết quả:

// console.log(a[b]);: Dòng này lại cố gắng lấy giá trị của thuộc tính có tên là [object Object] 
// (kết quả của b.toString()) từ đối tượng a.
// Vì cả a[b] và a[c] đều trỏ đến cùng một thuộc tính, nên kết quả cuối cùng sẽ là giá trị được gán sau cùng, tức là 456.