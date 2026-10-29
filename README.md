# Course API

REST API built with Express.js, MongoDB and Modular MVC architecture.

## Setup
1. npm install
2. Copy .env.example to .env and fill in the values
3. npm run dev (or npm start)

## Endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET/POST /api/categories, GET/PUT/DELETE /api/categories/:id
- GET/POST /api/courses, GET/PUT/DELETE /api/courses/:id

POST, PUT and DELETE routes need a Bearer token from /api/auth/login.
