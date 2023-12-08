// // in ra mần hình từ 1 đến 10
// for( let i = 1; i <= 10; i++){
//     let sum = 1 + i;
//     // document.write(i + "<br>")
//     // document.write(`${i} <br>`)
// }

// in ra màn hình tổng từ 1 đến 10
// let total = 0;
// for(let i = 1; i <= 10; i++){
//     total = total + i;
// }
// document.write(`Tổng từ 1 đến 10 là: ${total}`)

// // in ra màn hình từ 10 về 1
// for(i = 10; i >= 1; i--){
//     document.write(`${i} <br>`)
// }

// kiểm tra 1 số có phải là số nguyên tố hay không:
// let number = parseInt(prompt("Nhập số: "));
// for ()


// // do while
// let sum = 0;
// let number;
// do{
//     number = parseInt(prompt('Enter a number'));
//     sum += number;
// } while (number != 0);
// document.write("The sum is: " + sum);

// // // while
// // let a = 'hello';
// // while ( a !== 'q'){
// //     document.write(`${a} <br>`)
// //     a = prompt('Nhập')
// // }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++
// }




// for (i = 0; i < 5; i++) {
//     document.write("The number is " + i + "<br>");
// }


// function showMessagge(){
//     alert('xin chào');
// }

// let a = parseFloat(prompt("Nhập vào độ C: "));
// let f = a * ( 9 / 5 ) + 32;
// alert("Nhiệt độ F là: " + f);

// let a = parseInt(prompt("Nhập bán kính: "));
// let dientich = Math.PI * a * a;
// document.write("Diện tích hình tròn là: " + dientich);

// let a = parseFloat(prompt("nhập bán kính: "))


// sN.addEventListener("click", function(){
//     let ngay = parseInt(prompt("Nhập ngày: "));

//     switch (ngay){
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             document.getElementById("hienthi").innerHTML = (`Tháng ${ngay} có 31 ngày`);
//             break;
//         case 2:
//             document.getElementById("hienthi").innerHTML = (`Tháng ${ngay} có 28 hoặc 29 ngày`);
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             document.getElementById("hienthi").innerHTML = (`Tháng ${ngay} có 30 ngày`);
//             break;
//         default:
//             document.getElementById("hienthi").innerHTML = ("không có tháng này trong năm");
//             break

//     }
// })


