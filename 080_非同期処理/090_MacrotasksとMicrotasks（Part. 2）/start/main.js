// マイクロタスク
new Promise(function promise(resolve) {
  console.log('promise');  // 1番目

  // マクロタスク
  setTimeout(function task1() {
    console.log('task1');  // 3番目
    resolve();
  });

}).then(function job1() {
  console.log('job1');  // 4番目
  setTimeout(function task2() {
    console.log('task2');  // 8番目
  });

  queueMicrotask(function job4() {
    console.log('job4');  // 5番目
  })
}).then(function job2() {
  console.log('job2');  // 6番目
}).then(function job3() {
  console.log('job3');  // 7番目
})

console.log('global end');  // 2番目
