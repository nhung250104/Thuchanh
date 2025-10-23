
// Danh sách sản phẩm trong giỏ hàng
const cart = [
  { name: "Laptop", price: 15000000, quantity: 1 },
  { name: "Chuột", price: 300000, quantity: 2 },
  { name: "Bàn phím", price: 800000, quantity: 1 },
];

// Sử dụng map() để lấy giá trị từng sản phẩm (price * quantity)
// Sau đó dùng reduce() để cộng dồn toàn bộ giá trị
const total = cart
  .map((item) => item.price * item.quantity)
  .reduce((sum, current) => sum + current, 0);

console.log("👉 Tổng giá trị đơn hàng:", total.toLocaleString("vi-VN"), "VNĐ");
