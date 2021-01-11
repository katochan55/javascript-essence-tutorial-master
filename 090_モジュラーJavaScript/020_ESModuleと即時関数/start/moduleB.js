console.log(this);

function fn() {
  console.log(this);
}

const obj = {
  fn
}
obj.fn()

console.log(window);
