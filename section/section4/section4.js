function echoDiv(x, y) {
  return "商: " + Math.floor(x / y) + ", 余り: " + (x % y);
}
console.log(echoDiv(13, 3));

function reply(response) {
  if (response === undefined) {
    return "返信なし";
  } else if (typeof response === "string") {
    return response.replace(/"/g, '\\"');
  } else {
    return response;
  }
}
console.log(reply());

/*/"/gは、正規表現でダブルクォーテーションを検索するためのパターンです。
gはグローバルフラグで、文字列中のすべてのダブルクォーテーションを検索することを意味します。
replace()メソッドは、検索されたすべてのダブルクォーテーションを置換するために使用されます。
'\\"'は、ダブルクォーテーションをエスケープするための文字列です。
つまり、replace()メソッドは、ダブルクォーテーションをエスケープした文字列を返します。
JavaScript関数を以下のように変更することで、引数にダブルクォーテーションが入った場合には、ダブルクォーテーションを返すようになります。*/
module.exports = { echoDiv, reply };
