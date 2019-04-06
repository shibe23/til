# mapState と mapGetters の違い

# mutations を object spread syntax で書く時の注意点

```js
const mutations = {
  SET_ITEMS: (state, payload) => {
    // この書き方の場合、jsonで配列にオブジェクトが入っていた場合、配列->オブジェクトに変わってしまう
    state.products = { ...state.products, ...payload.products };
  }
};
```

# TypeSCript を Vuex で使う場合

- `$state`が下記のエラーになる

> Property '\$state' does not exist on type 'CombinedVueInstance<Vue, {}, { fetchProducts(): void; getTotal(products: any): any; onclick(): void; }, { products: string[]; }, Readonly<Record<never, any>>>'.Vetur(2339)

```js
    products(): Array<string> {
      return this.$state.ProductList.products;
    }
```
