class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 通常のインスタンス化 -> 演算子表記
const obj1 = new C(1, 2);
// Reflectを用いたインスタンス化 -> 関数表記
const obj2 = Reflect.construct(C, [1,2]);

console.log('a' in obj1);
