// マクロタスク
// タスクキューに入るためグローバルコンテキストが終了した後に実行される（マイクロタスクよりさらに後）
setTimeout(function task1() {
  console.log('task1');  // 4番目
});

// マイクロタスク
// Promiseのcallback関数は同期的に処理されるため、最初に表示されるのは'promise'
new Promise(function promise(resolve) {
  console.log('promise');  // 1番目
  resolve();
}).then(function job1() {  // こちらも非同期処理のためグローバルコンテキストの後に実行される
  console.log('job1');  // 3番目
});

console.log('global end');  // 2番目
