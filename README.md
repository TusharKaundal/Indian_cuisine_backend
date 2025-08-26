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

## Deployment to Render

1. Push your code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - Name: `indian-cuisine-backend`
   - Region: Choose the one closest to your users
   - Branch: `main` or your preferred branch
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
6. Add environment variables:
   - `NODE_VERSION`: `20.x`
   - `PORT`: `10000`
   - `DATAPATH`: `./data/indian_food.csv`
7. Click "Create Web Service"

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
