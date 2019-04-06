# 型アノテーション
```ts
function foo():{a:number,b?:number}{
  // if Something
  return {a:1,b:2};
  // else
  return {a:1};
}
```

# シリアライズ
jsonでシリアライズする場合、
undefinedの値を持つkeyは削除される場合がある
https://typescript-jp.gitbook.io/deep-dive/recap/null-undefined

# nullではなくundefinedをつかう
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined

# アンビエント宣言
moduleでエラーが出るときは
declare module '*.css'
のように書く

その他、個別にclassなどを宣言できる
https://docs.solab.jp/typescript/ambient/declaration/


# declare
他のコンポーネントから変数や関数などが提供されることをTypeScriptコンパイラに伝える
コンパイルすると、d.tsファイルの内容は出力されない

- `declare var` … `const`, `let`も使用可能
- `declare function` … 関数
- `declare namespace` … オブジェクト

- d.tsで定義された変数は、他のファイルでも定義済みになる？

```ts
//app.d.ts
declare var foo: string;

// 
foo = 2 // 型strig型 '2' を型 'string' に割り当てることはできません。
```

# APIの戻り値は型を定義する必要がある？

# その他
- Enumは奥が深い
- APIからレスポンスされたJSONは、InterfaceをJSONのレスポンスと同じ内容で作る形でよさそう
