setup:
	@make build
	@make up 
	@make composer-update
build:
	docker-compose build --no-cache --force-rm
stop:
	docker-compose stop
up:
	docker-compose up -d
composer-update:
	docker exec grics-laravel-docker bash -c "composer update"
data:
	docker exec grics-laravel-docker "php artisan migrate"
	docker exec grics-laravel-docker "php artisan db:seed"