# Musou-ranbun
Vue.jsとElectronを使用したTODO習作亜種アプリです。一行のセンテンスを積み上げ並び替える書き流しアプリ。

夢想乱文

# 概要

input textをlocalStorageに保存し、あとから並び替え・編集・削除・全体のコピーができるアプリです。
並び替えにはvuedraggableを使い、vueのコンポーネントを使いながらもマウスでのドラッグ操作で実現を目指しています。。

2017年5月ごろにVue.js、Vue-router、Vuexの使用感を探るために開発しました。
そのためコミット時期からみるとかなり古いコードです。

***

Qiitaへの投稿を予定していましたが、他の投稿予定記事ストックが減らず、一年以上死蔵しているため整理ついでに公開。
ドラッグ操作など、細かい所で処理を煮詰めきれていませんが、

* 投稿予定が決まらない
* コードが古くなりすぎている

なにより
**Vue,Vue-router,Vuex**による一連のデータの流れと実装方法の概略というメインテーマを完了できているため、
手を加える場合は改修よりこのコードを参考に新規組み直しを選択すると思います。

# 使用技術

* vue
* vue-material
* vue-router
* vuedraggable
* vuex
* vuex-router-sync
* electron

# きっかけ

習作のTODOアプリを作るにしても、なにか特徴をもたせたかったため。
文章を書いているとどうしても気になる前後の文章をできるだけ意識せず、好きなセンテンスを好きなだけ書き、
あとから各センテンスを並び替え・編集できる創作補助ツールのようなものを目指した。
