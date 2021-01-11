/**
 * 問題：
 * myFetch関数を使って以下の「データ取得の流れ」の通り、
 * 順次JSONを取得し、取得したデータを加工して、
 * 以下のメッセージをコンソールに表示してください。
 *
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
 *
 ******************************
 * データ取得の流れ
 * １．"user1.json"を取得（Bobのユーザー情報取得）
 *
 * ２．"user1.json"のidの項目を元に
 *     `friendsOf${id}.json`でフレンド一覧を取得
 *
 * ３．取得したフレンドのID（ユーザーID）を元に、
 * 　　`user${id}.json`で各ユーザーの情報を取得
 *
 * ４．各ユーザー情報のlatestMsgIdが最後に投稿した
 * 　　メッセージのIDになりますので、そのidを用いて
 * 　　`message${friend.latestMsgId}.json`
 * 　　を取得。
 *
 * １～４で取得したデータをもとにコンソールログに
 * タイムラインの文字列を作成してください。
 *
 * ※await/asyncで記述してみてください。
 */
async function myFetch(fileName) {
	let response = await fetch(`../json/${fileName}`);
	let json = await response.json();
	// console.log(json);
	return json;
}

myFetch('user1.json').then(function(json) {
	// console.log(json.id);
	myFetch(`friendsOf${json.id}.json`).then(function(user) {
		// console.log(user.friendIds);
		for(const id of user.friendIds) {
			myFetch(`user${id}.json`).then(function(friend) {
				// console.log(friend.latestMsgId);
				myFetch(`message${friend.latestMsgId}.json`).then(function(message) {
				  console.log(`${user.name} says: ${message.message}`);
				})
			});
		}
	});
});

