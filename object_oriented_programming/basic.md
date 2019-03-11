# 目的
- オブジェクト指向に基づいたコードの書き方を理解する


# オブジェクト指向とは
- Classの中に
  * 状態
  * 振る舞い
を格納し、外部からはメッセージを送るだけで、振る舞いを意識せずに利用できる
https://java2005.cis.k.hosei.ac.jp/materials/lecture15/adt.html


# インスタンス変数を隠蔽する
- Getterを用意することで、インスタンス変数に対する変更に柔軟に対応できる

```ruby
class Gear
  # chainringとcogをRead Onlyにする
  attr_reader :chainring, :cog
  def initialize(chainring, cog)
    @chainring = chainring
    @cog = cog
  end

  def ratio
    # class内のメソッドでも、インスタンス変数を直接参照しない
    chainging / cog.to_f
  end
end
```

- attr_readerは下記と同等
- メソッドにすることで、データ->振る舞いに変更できる
```ruby
def cog
  @cog
end
```

```ruby
def cog
  @cog * foo / bar 
end
```

# 疑問点
- 引数はどのような基準で良し悪しを判断するか