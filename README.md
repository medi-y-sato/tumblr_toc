# tumblr_toc

目次を表示したい所に下記のようなコードを入れて下さい。

Tumblr_Toc.querySelectorが、目次に使用するheadingタグを操作する範囲を指定する QuerySelector になります。テンプレートに合わせて設定して下さい。

```html
{block:PermalinkPage}
<script src="http://medi-y-sato.github.io/tumblr_toc/tumblr_toc.min.js"></script>
<script>
Tumblr_Toc.querySelector='div.body-text'
</script>
<div id="tumblr_toc"></div>
{/block:PermalinkPage}
```
