const array = [1,2,3,4,5];

// reduce -> 配列から一つの値を生成する
// callback関数の第一引数: accumulation（1ループ前の戻り値）、第二引数：current（ループ中の現在の値）
const result = array.reduce(function(ac, cu) {
  return ac + cu;
}, 0);  // reduceの第二引数: 1ループ目のacに入る。配列の全ての要素に何かしらの操作を与えたい場合に設定
console.log(result);  // => 15 -> 配列の総和
