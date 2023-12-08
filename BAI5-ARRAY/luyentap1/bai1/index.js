// // bài 1: Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10

// let arr = [3, 5, 7, 9, 11, 14, 18, 24, 30, 40];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] >= 10) {
//         console.log(arr[i]);
//     }
// }

// // bài 2:

// let arr = [3, 5, 7, 9, 11, 75, 14, 18, 24, 30, 40];
// let max = arr[0];
// let index = 0;

// for(let i = 0; i <= arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//         index = i;
//     }   
// }console.log(`Phần tử có giá trị lớn nhất là ${max} và ở vị trí ${index}`);

// // bài 3:

// let arr = [3, 5, 7, 9, 11, 75, 14, 20];
// let max = arr[0];
// let sum = 0;

// for(let i=0; i<arr.length - 1; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// } console.log("Giá trị lớn nhất trong mảng là: " + max);

// for(let a of arr) {
//     sum += a;
// }
// let avergae = sum / arr.length;
// console.log("Giá trị trung bình của các phần tử trong mảng là: " + avergae);


// bài 4: Viết chương trình khởi tạo/nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó
// let arr = [3, 5, 7, 9, 11, 75, 14, 18];
// let num = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//      num.push(arr[i]);
// }

// console.log(num);

//// bài 5: 
// let arr = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
// let a = 0;
// for (let i = 0; i < arr.length -1; i++) {
//     if(arr[i] < 0) {
//         a++;
//     }
// }
// console.log(a);

// bài 6

// let soNguyen = [5, 8, 7, 15, 19, 25, 30, 18, 21, 24];
// let V = 6;
// let isInArray = false;

// for(let i = 0; i < soNguyen.length; i++) {
//     if(soNguyen[i] === V) {
//         isInArray = true;
//         break;
//     }
// }
// if(isInArray) {
//     console.log("V is in the array");
// } else {
//     console.log("V is not in the array");
// }







