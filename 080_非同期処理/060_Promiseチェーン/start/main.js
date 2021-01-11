function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

// 渡した非同期処理のどれか一つが完了したら`then`の中身が実行される
Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function(data) {
  console.log(data);
});
// => 2
// 3  // 最初にresolveしたPromiseインスタンスの引数がdataに渡り、+1されたものが返っている
// 3
// 4
