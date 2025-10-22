# ClarifAI

A prototype of a web application with NextJs and NestJs for extracting text from images using OCR.

## Run locally
To run locally this project, follow this steps:

<ol>
  <li><b>Clone the repository</b></li>
  <li><b>Set up your environment variables</b>
  
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
  ````
  </li>
  
  <li><b>Run the project</b>
  
  </li>
</ol> 

## Run a demo
To see a demo of how the project works, access [ClarifAI - Vercel App Demo](https://clarif-ai-nine.vercel.app/).

For using the chatbot, you need to create a login in the sign up page, then, sign in, and then you'll be redirected to the chatbot page.
  
## To Be Continued
This features will be implemented in the future:
<ol>
  <li>Chatbot history</li>
  <li>Strong authentication, roles, jwt token and cookies.</li>
</ol> 
