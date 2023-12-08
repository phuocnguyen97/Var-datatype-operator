// Mảng (array)
// Cách khai báo mảng

//cách 1: dấu []
// let array1 = []; // array là một mảng rỗng
//let array1 = [1, "Phuoc", 18, [29, "Ha Noi"]]; // khai báo mảng có giá trị
// console.log(array1);

// cách 2: new array();
//let array2 = new Array(); //array2 là mảng rỗng
// let array2 = new Array(1, "Phuoc", 18, "Ha Noi");
// console.log(array2);

//chiều dài mảng sử dụng hàm length
// let array1 = [1, "Phuoc", 18, [29, "Ha Noi"]];
// console.log(array1);

// console.log(array1.length); // chiều dài của mảng array1
// console.log(array1[array1.length - 1].length); // chiều dài của phần tử mảng trong mảng array1

// truy cập các phần tử trong mảng
// let array1 = [1, "Phuoc", 18, [29, "Ha Noi"]];
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(array1[1]);
// console.log(array1[3][1]);
// console.log(array1[array1.length - 1]);

// for (let index in array1) {
//     console.log(array1[index]);
// }

// duyệt mảng bằng for thường
// for(let i = 0; i <= array1.length - 1; i++) {
//     console.log(array1[i]);
// }

// duyệt mảng ngược
// for(let i = array1.length -1; i > 0; i--) {
//     console.log(array1[i]);
// }

// các thao tác với mảng
// let seas = ["Black Sea", 1,  "Oceans Sea", "Red Sea", 15];
// let seas2 = ["Black Sea", "Oceans Sea", "Red Sea"];

// let index = seas.indexOf("Oceans Sea");
// console.log(index);
// // - Create: push () thêm phần tử vào cuối mảng
//          //  unshift () thêm phần tử vào đầu mảng
// seas.push("Blue Sea");
// seas.unshift("Yellow Sea");

// - Read: Duyệt mảng dùng for ()
//         Duyệt mảng dùng map () tương đương với forEach

// - Delete: pop () xoá phần tử cuối mảng
        // shift () xoá phần tử đầu mảng

// - Update: array[i] = value;
// seas[0] = "ABC";

// sắp xếp mảng theo trình tự a-z: sort()
// seas.sort();
// console.log(seas);

// Đảo ngược mảng:
// seas.reverse();
// console.log(seas);

// thay thế mảng
// seas.splice(1, 0, "Purple"); // (vị trí cần thay thế, có muốn xoá hay ko, từ thay thế)
// console.log(seas);

// Nối mảng:

// seas.concat(seas2);
// console.log(seas.concat(seas2));

//bt: xoá phần tử ở đầu mảng, viết phổ thông

// function customeShift(arr) {
//         if
// }
