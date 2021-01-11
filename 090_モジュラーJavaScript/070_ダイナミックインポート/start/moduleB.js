// 同期的に（上から読み込んで）呼び出す従来の方法
// import { publicVal, publicFn } from './moduleA.js';
// publicFn();

// ダイナミックインポートで必要になったときに呼び出す方法
// なるべくユーザーを待たせずに画面の初期表示ができるなどのメリットがある
// import(...)の戻り値はPromise
// modulesにはmoduleAからexportしたものの集合オブジェクトが入る
// import('./moduleA.js').then(function(modules) {
//   modules.publicFn();  // => publicFn called
// })

// asyncでも書ける
async function fn() {
  const modules = await import('./moduleA.js');
  modules.publicFn();
}
fn();
