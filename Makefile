docker-build:
	npm run build
	docker build -t chrhicks/node-gulp-webpack .

docker-push:
	docker push chrhicks/node-gulp-webpack

docker-release: docker-build docker-push
