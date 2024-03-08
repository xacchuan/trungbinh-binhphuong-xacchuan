// index.js

// Hàm tính trung bình bình phương của hai số
function calculateMeanSquare(number1, number2) {
  const square1 = number1 * number1;
  const square2 = number2 * number2;

  const meanSquare = (square1 + square2) / 2;

  return meanSquare;
}

// Nhận giá trị từ dòng lệnh
const args = process.argv.slice(2);
const number1 = parseFloat(args[0]);
const number2 = parseFloat(args[1]);

// Kiểm tra xem đầu vào có hợp lệ không
if (isNaN(number1) || isNaN(number2)) {
  console.log('Vui lòng nhập hai số hợp lệ.');
} else {
  // Tính trung bình bình phương và hiển thị kết quả
  const result = calculateMeanSquare(number1, number2);
  console.log(`Trung bình bình phương của ${number1} và ${number2} là: ${result}`);
}
