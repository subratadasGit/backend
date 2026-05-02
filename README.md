# Generator CMS - Backend

This is the backend service for **Generator CMS**, an AI-powered content and image generation application. It provides robust RESTful APIs to serve the frontend, integrating various AI services and managing data storage.

## Features

- **User Authentication:** Secure signup and login using JWT and bcrypt.
- **AI Content Generation:** Integrates with Google Gemini API for rewriting, expanding, shortening, and generating SEO-optimized articles.
- **AI Image Generation:** Integrates with Hugging Face Inference API for text-to-image capabilities.
- **Media Storage:** Cloudinary integration to store and serve generated images.
- **Database:** MongoDB (via Mongoose) for storing users, content history, and image history.
- **Caching (Optional):** Redis for caching content and performance improvements.
- **Security & Rate Limiting:** Built-in rate limiters (`express-rate-limit`) to prevent abuse.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Cache:** Redis (optional)
- **AI Integrations:** `@google/genai`, `@huggingface/inference`
- **Other Key Packages:** `cloudinary`, `jsonwebtoken`, `bcrypt`, `cors`, `dotenv`

## Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB connection string
- Cloudinary account credentials
- Hugging Face API key
- Gemini API key
- (Optional) Redis server

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
HUGGING_FACE_API_KEY=your_huggingface_key
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
GEMINI_API_KEY=your_gemini_key

# Optional Redis Configuration
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_USERNAME=default
REDIS_PASSWORD=your_password
```

## Installation and Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The server will typically run on `http://localhost:8000`.*

## Available Scripts

- `npm run dev`: Starts the server in development mode using `nodemon`.
- `npm start`: Starts the server normally using `node`.
- `npm run run`: Alias for development mode.

## API Overview (Base: `/v1`)

### Authentication
- `POST /auth/sign-up` - Register a new user
- `POST /auth/sign-in` - Login and receive a JWT

### Content (Protected Routes)
- `POST /content/:action` - Generate content (actions: rewrite, expand, shorten, etc.)
- `GET /content/history` - Retrieve content generation history
- `GET /content/search` - Search through content
- `GET /content/:id` - Retrieve specific content details

### Image (Protected Routes)
- `POST /image/generate` - Generate an image from a prompt
- `GET /image/history` - Retrieve previously generated images

## Troubleshooting

- **Redis Warnings:** If Redis is not configured, warnings may appear at startup. The app will gracefully fall back and continue operating without caching.
- **Provider Timeouts:** AI image and content generation might be slow. The backend implements timeout handling to avoid hanging requests.
