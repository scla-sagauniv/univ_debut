# 環境構築方法
まず，以下のコマンドを順に実行してください．
```
docker-compose build
docker-compose up -d
```

フロントだけうごしたい場合は以下のコマンドを実行してください．
```
docker-compose up -d --build front
```
または
```
cd front/pomodoro
yarn dev
```
