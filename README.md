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

1. Navigate to the project root directory
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
├── src/                    # Frontend source code
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   └── styles/           # Global styles
├── backend/               # Backend source code
│   ├── src/              # Backend source files
│   │   ├── models/       # MongoDB models
│   │   ├── routes/       # API routes
│   │   └── server.ts     # Express server
│   └── package.json      # Backend dependencies
└── package.json          # Frontend dependencies
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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
