const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 17 },
  { name: "Chi", age: 30 },
  { name: "Dũng", age: 20 },
];

const adults = users.filter((user) => user.age >= 18);

const sortedAdults = adults.sort((a, b) => a.age - b.age);

const names = sortedAdults.map((user) => user.name);

console.log("Danh sách người >= 18 tuổi (tăng dần theo tuổi):", names);
