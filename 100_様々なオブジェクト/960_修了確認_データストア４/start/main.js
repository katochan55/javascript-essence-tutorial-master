/**
 * 問題：
 * これまでの問題で作成した以下のコードをESモジュール
 * を使用して、自分なりに分割、整理（リファクタリング）
 * してみてください。
 *
 * ※絶対的な答えはありません。
 * 今後、このコードをメンテナンスする上でどのようにすれ
 * ばメンテナンスがしやすくなりそうか考えながら整理して
 * みてください。
 *
 */

import {createStore} from './store.js';

(async () => {
	const KEY = 'test-data';
	const store = await createStore(KEY);

	console.log('init', store);
	pxy.name = 'Tom';
	console.log('change', store);
	pxy.name = 'Tim';
	console.log('change2', store);
})();

