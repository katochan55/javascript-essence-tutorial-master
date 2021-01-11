new Promise(function(resolve, reject) {
  console.log('promise');
  resolve('hello');
  // resolve('hello');
}).then(function(data) {  // resolveの引数がcallback関数の引数に入る
  console.log('then: ' + data);
  return data;  // returnで次のthenに引数を渡す
}).then(function(data) {
  console.log('then: ' + data);
}).catch(function(data) {
  console.log('catch: ' + data);
}).finally(function() {  // finallyには引数を渡せない
  console.log('finally');
})

console.log('global end');
