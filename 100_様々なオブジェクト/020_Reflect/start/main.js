class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}


const bob = {
  name: 'Bob',
  _hello: function () {  // プライベートメソッド
    console.log(`hello ${this.name}`);
  }
}

const tom = {
  name: 'Tom',
  _hello: function () {  // tom._hello(); => hello Tom
    console.log(`hello ${this.name}`);
  },
  get hello() {  // tom.hello; => hello Tom
    return this._hello();
  },
}

// 値の取得...内部的にはReflect.get()を呼んでいるのと同じ
tom.hello; // => hello Tom
Reflect.get(tom, 'hello');  // => hello Tom
// 第三引数にreceiverを取ることが可能。receiverに登録されたオブジェクトがgetメソッドの中で使用されるthisに束縛される（bindのような役割）
Reflect.get(tom, 'hello', bob);  // => hello Bob
