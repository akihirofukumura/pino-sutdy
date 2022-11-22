function test(num, txt) {
  console.log(num, txt);
}

test(50, "test");

function test2(num = 50) {
  console.log(num);
}

test2(200);

const total = 680;
function testTax(num) {
  const result = num * 1;
  return num * 0.1;
}
const tax = testTax(total);
console.log(total + "税金は", +tax);
