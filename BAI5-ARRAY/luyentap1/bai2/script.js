let arr = [3, 5, 7, 9, 11, 14, 18, 24, 30, 40];
let max = arr[0];
let index = 0;

for(let i = 0; i <= arr.length; i ++) {
    if(max < arr[i]) {
        max = arr[i];
        index = i;
    }   
}console.log(`Phần tử có giá trị lớn nhất là ${max} và ở vị trí ${index}`);
