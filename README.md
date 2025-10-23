# ClarifAI

A prototype of a web application with NextJs and NestJs for extracting text from images using OCR.

## Run locally
To run locally this project, follow this steps:

<ol>
  <li><b>Clone the repository</b>
    
    
    git clone https://github.com/your-username/clarif-ai.git
    cd clarif-ai
    
  </li>
  <li><b>Set up environment variables</b>
  
  You’ll need two <code>.env</code> files — one for the backend and another for the frontend..

  a. Backend environment variables
  
  Create a file named <code>.env</code> inside <code>apps/api</code>:
  
  ```sh
  #Your database URL for connecting with your database.
  DATABASE_URL = "your_database_url_here"
  
  #Your OpenRouter API key for connecting with a LLM model
  OPENROUTER_API_KEY = "your_openrouter_api_key_here"
  ```

  b. Frontend environment variables

  Create a file named <code>.env</code> inside <code>apps/web</code>:
  
  ```sh
  #The back-end url for POST requests.
  NEXT_PUBLIC_BACKEND_URL ="http://localhost:8000"
  ````
  </li>
  
  <li><b>Install dependencies</b>

  Install all required dependencies from the root directory:

      npm install

  </li>

  <li><b>Install prisma client and migrate database</b>

  Navigate to the backend directory and generate the Prisma client, then apply migrations:

    cd apps/api
    npm prisma generate
    npm prisma migrate dev

  </li>

  <li><b>Run the project</b>

  Return to the root directory and start both applications using Turborepo:

    npm run dev

  </li>

</ol> 

## Demo
You can explore a live demo of the project here: [ClarifAI - Vercel App Demo](https://clarif-ai-nine.vercel.app/).

⚠️ Note:
The backend is deployed on Render (Free Plan), which may cause API requests to take up to 50 seconds to complete due to cold starts and limited processing power.

### How to use:
<ol>
  <li>Go to the Sign Up page and create an account.</li>
  <li>Log in using your credentials.</li>
  <li>You’ll be redirected to the chatbot interface, where you can upload an image and view the extracted text in real time.</li>
</ol>

## Tech Stack
<ul>
  <li>Frontend: Next.js, TypeScript, TailwindCSS</li>
  <li>Backend: NestJS, Prisma ORM, PostgreSQL</li>
  <li>AI Integration: OpenRouter (GPT-4o-mini)</li>
  <li>Infrastructure: Turborepo</li>
</ul>

## Roadmap
This features will be implemented in the future:

<ol>
  <li>🗂️ Persistent chat history for each user</li>
  <li>🔐 Advanced authentication with roles, JWT tokens, and cookies</li>
  <li>📄 Download the conversation  and text extracted as PDF.</li>
</ol>
