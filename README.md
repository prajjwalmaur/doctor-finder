# Doctor Finder Application

A modern web application for finding and filtering doctors, built with Next.js and Node.js.

## Features

- Doctor listing with filters
- Responsive design
- SEO optimised
- RESTful API backend
- MongoDB database

## Tech Stack

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Database: MongoDB

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/doctor-app
   ```
4. Store Some Doctor info in the Database:
   ```bash
   npm run seed
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Add Doctor
- **POST** `/api/doctors/add`
- Request body:
  ```json
  {
    "name": "string",
    "specialization": "string",
    "experience": "number",
    "rating": "number",
    "location": "string",
    "availability": "string",
    "consultationFee": "number",
    "languages": ["string"],
    "education": ["string"],
    "imageUrl": "string",
    "description": "string"
  }
  ```

### List Doctors with Filters
- **GET** `/api/doctors/list`
- Query parameters:
  - `page`: Page number (default: 1)
  - `limit`: Items per page (default: 10)
  - `specialization`: Filter by specialization
  - `location`: Filter by location
  - `minRating`: Minimum rating
  - `maxFee`: Maximum consultation fee
  - `sortBy`: Field to sort by (rating, consultationFee, experience)
  - `sortOrder`: Sort order (asc, desc)

## Project Structure

```
.
├── frontend/              # Frontend application
│   ├── src/              # Frontend source code
│   │   ├── app/         # Next.js app directory
│   │   ├── components/  # React components
│   │   └── styles/     # Global styles
│   ├── public/         # Static files
│   └── package.json    # Frontend dependencies
├── backend/             # Backend source code
│   ├── src/            # Backend source files
│   │   ├── models/     # MongoDB models
│   │   ├── routes/     # API routes
│   │   └── server.ts   # Express server
│   └── package.json    # Backend dependencies
└── README.md           # Project documentation
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Frontend Deployment
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Backend Deployment
To deploy the backend on Vercel:

1. Push your code to a GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Configure the project:
   - Framework Preset: Node.js
   - Root Directory: backend
   - Build Command: npm run vercel-build
   - Output Directory: dist
   - Install Command: npm install
6. Add Environment Variables:
   - MONGODB_URI: Your MongoDB connection string
   - NODE_ENV: production
   - FRONTEND_URL: Your frontend URL (e.g., https://your-frontend.vercel.app)
7. Click "Deploy"

### Environment Variables
For local development, create a `.env` file in the backend directory with:
```
MONGODB_URI=mongodb://localhost:27017/doctor-app
PORT=5000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

For production, set these variables in your Vercel project settings.

### Important Notes
- Make sure your MongoDB database is accessible from Vercel's servers
- Update the CORS configuration in `server.ts` with your frontend's production URL
- The backend will be deployed as serverless functions
- Health check endpoint is available at `/api/health`

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
