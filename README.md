# Indian Cuisine Backend

Backend API for Indian Cuisine application built with Node.js, Express, and TypeScript.

## Prerequisites

- Node.js 20.x
- npm or yarn
- Git

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd Indian_cuisine_backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   PORT=5500
   DATAPATH=./data/indian_food.csv
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the TypeScript code
- `npm start` - Start the production server
- `npm run watch` - Watch for changes and rebuild

## API Endpoints

- `GET /api/dishes` - Get all dishes
- `GET /api/dishes/:dishId` - Get a specific dish by ID
- `GET /api/ingredients` - Get all ingredients

## Project Structure

```
src/
├── controllers/    # Route controllers
├── models/        # Data models
├── routes/        # API routes
├── schemas/       # Zod schemas
└── utils/         # Utility functions
data/              # Data files
```
