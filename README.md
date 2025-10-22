# ClarifAI

A prototype of a web application with NextJs and NestJs for extracting text from images using OCR.

## Run locally
To run locally this project, follow this steps:

1. Clone the repository
2. Set up your environment variables

Create a .env file for each directory, containing the following variables:

a. Back-end related environment variables required:
(Inside the folder /api)

```sh
#Your database URL for connecting with your database.
DATABASE_URL = ****

#Your OpenRouter API key for connecting with a LLM model
OPENROUTER_API_KEY = ***
```

b. Front-end related environment variables required:
(Inside the folder /web)

```sh
#The back-end url for POST requests.
NEXT_PUBLIC_BACKEND_URL = ***
```

3.  Prisma, npm, packages?
Run the following commands:

```sh
npx create-turbo@latest
```

## Run a demo
To see a demo of how the project works, access https://clarif-ai-nine.vercel.app/
For using the chatbot, you need to create a login in the sign up page, then, sign in, and then you'll be redirected to the chatbot page.
  
## To Be Continued
This features will be implemented in the future:
1. Chatbot history
2. Strong authentication, roles, jwt token and cookies.