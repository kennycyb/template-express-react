IMAGE_NAME ?= template-express-react
IMAGE_TAG ?= latest
PORT ?= 3000

.PHONY: build docker-build run

build: docker-build

docker-build:
	docker build -t $(IMAGE_NAME):$(IMAGE_TAG) .

run:
	docker run --rm -p $(PORT):3000 $(IMAGE_NAME):$(IMAGE_TAG)

