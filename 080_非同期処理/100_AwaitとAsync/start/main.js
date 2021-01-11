function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  // awaitをつけることでresolve(val)のvalを渡す
  let val = await sleep(0);
  console.log(val); // => 1
  val = await sleep(val);  // => 1
  val = await sleep(val);  // => 2
  val = await sleep(val);  // => 3
  val = await sleep(val);  // => 4
}

init();

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
