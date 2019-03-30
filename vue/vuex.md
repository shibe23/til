# mapStateとmapGettersの違い

# mutationsをobject spread syntaxで書く時の注意点
```js
const mutations = {
  SET_ITEMS: (state, payload) => {
    // この書き方の場合、jsonで配列にオブジェクトが入っていた場合、配列->オブジェクトに変わってしまう
    state.products = { ...state.products, ...payload.products };
  }
};
```
