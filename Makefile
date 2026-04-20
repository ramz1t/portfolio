PROJECT_ID=personal-493920
SERVICE_NAME=telegram-bot
REGION=europe-north1
IMAGE=gcr.io/$(PROJECT_ID)/$(SERVICE_NAME)

build:
	docker build -t $(IMAGE) .

push:
	gcloud builds submit . --tag $(IMAGE)

deploy:
	gcloud run deploy $(SERVICE_NAME) \
		--image $(IMAGE) \
		--platform managed \
		--region $(REGION) \
		--allow-unauthenticated \
		--port 3001 \
		--env-vars-file .env

all: push deploy

run:
	docker run -d -p 3001:3001 --env-file .env $(IMAGE)
