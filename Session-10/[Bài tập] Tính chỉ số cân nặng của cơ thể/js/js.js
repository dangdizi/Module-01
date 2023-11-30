let height = +prompt ("Nhập chiều cao: ");
let weight = +prompt ("Nhập cân nặng: ");

let bmi = weight / Math.pow (height, 2);

if (bmi < 18.5) {
    console.log (`chỉ số bmi là: ${bmi} - Cân nặng thấp (gầy).`);


} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log (`chỉ số bmi là: ${bmi} - Cân nặng bình thường.`);


} else if (bmi > 24.9 && bmi <= 29.9) {
    console.log (`chỉ số bmi là: ${bmi} - Tiền béo phì.`);


} else if (bmi >= 30 && bmi <= 34.9) {
    console.log (`chỉ số bmi là: ${bmi} - Béo phì độ 1.`);


} else if (bmi >= 35 && bmi <= 39.9) {
    console.log (`chỉ số bmi là: ${bmi} - Béo phì độ 2.`);


} else {
    console.log("Béo phì độ 3");
}