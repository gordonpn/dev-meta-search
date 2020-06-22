.PHONY: help up start restart stop

up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build

start:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build --detach

restart:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml stop
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build --detach

stop:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml stop
