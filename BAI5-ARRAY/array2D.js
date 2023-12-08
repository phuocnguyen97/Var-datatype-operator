let as2D = [
    ["a","b","c","d","e","f","g","h","i","j"],
    ["A","B","C","D","E","F","G","H","I","J"],
    ["!","@","#","$","%","^","&","*","(",")"]
];

let sOut = "<table border=2>"; // tạo bảng
for(let i = 0; i < as2D.length; i++) { // hàng
    sOut += "<tr>";
    for(let j = 0; j < as2D[i].length; j++) { // cột
        sOut += `<td>${as2D[i][j]}</td>`;
    }
    sOut += "</tr>";
}
sOut += "</table>";

document.getElementById('render').innerHTML = sOut;

