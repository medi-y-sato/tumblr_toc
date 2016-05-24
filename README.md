# tumblr_toc

目次を表示したい所に下記のようなコードを入れて下さい。

Tumblr_Toc.querySelectorが、目次に使用するheadingタグを操作する範囲を指定する QuerySelector になります。テンプレートに合わせて設定して下さい。

```html
{block:PermalinkPage}
<script src="//medi-y-sato.github.io/tumblr_toc/tumblr_toc.min.js"></script>
<script>
Tumblr_Toc.querySelector='div.body-text'
</script>
<div id="tumblr_toc"></div>
{/block:PermalinkPage}
```

例 : https://medi-y-sato.tumblr.com/post/144645235569/%E3%83%86%E3%82%B9%E3%83%88%E6%8A%95%E7%A8%BF%EF%BC%92
