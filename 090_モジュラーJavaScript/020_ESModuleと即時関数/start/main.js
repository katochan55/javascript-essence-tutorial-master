const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + privateVal);
  }

  function privateFn() {

  }

  // 即時関数が実行されるときの戻り値（moduleAに格納される）
  return {
    publicFn,
    publicVal
  }
})();

const moduleB = (function({ publicFn:fn, publicVal:val }) {
  fn();
  console.log(val);
})(moduleA);
