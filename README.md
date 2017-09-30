# flow-base-project

## 環境構築

yarnをインストールします。

```ShellSession
$ npm install -g yarn
```

プロジェクトの依存パッケージをインストールします。

```ShellSession
$ yarn install
```

サードパーティのライブラリに対する型定義を探してダウンロードしてくれるツール[flow-typed](https://github.com/flowtype/flow-typed)をインストールします。

```ShellSession
$ npm install -g flow-typed
```

`package.json`から依存関係をもとにflowの型定義をダウンロードします。

```ShellSession
$ flow-typed install
```


## 開発サーバー

開発サーバーを起動します。

```ShellSession
$ gulp serve
```

起動したらブラウザで http://localhost:5000/ にアクセスすることで画面が表示されます。


## プロジェクトビルド

次のコマンドで本番環境を想定したプロジェクトをビルドすることができます。

```ShellSession
$ gulp build 
```

ビルド結果を検証したい場合、次のコマンドでビルド結果の検証用サーバーを起動します。

```ShellSession
$ gulp serve:prod
```

起動したらブラウザで http://localhost:5000/ にアクセスすることで画面が表示されます。

