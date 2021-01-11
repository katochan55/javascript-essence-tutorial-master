function a() {
  console.log('called');
}

a();

const c = (function(d) {
  console.log('called' + d);
  return 0;
})(10);
