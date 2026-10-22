# Alumni Campus Pop — native implementation

青山学院大学OB向けの採用LP。ヘッダー、ヒーロー、プロフィール、キャリア、仕事、環境、メッセージ、FAQ、CTA、フッターをHTML/CSSで実装しています。文字とレイアウトを含む画像の埋め込みは使用していません。

## 実行・公開
静的HTML/CSS/JavaScriptです。mainブランチのルートをGitHub Pagesで公開します。
`python3 -m http.server 4323` でローカル確認できます。

## 写真
公式元写真: https://www.baudroie.jp/control/img/bg-int01-mv.jpg
人物のRGBは変更せず、アルファマスクで背景を除去しています。顔内部の不透明度を255に保ち、穴を修正しました。2倍拡大はLanczos補間のみで、生成や顔の再描画はしていません。検証値はportrait-provenance.jsonに記録しています。

## 操作
ページ内ナビゲーション、モバイルメニュー、相談案内ダイアログ。相談先URLは未確定のため、応募情報の送信は行いません。

## 検証
画像・フォント参照、内部リンク、見出し構造、画像化されたセクションの不使用、写真のRGBと透明度を検査済み。ブラウザー接続が利用できず、今回のPC/スマートフォン実画面確認は未実施です。
