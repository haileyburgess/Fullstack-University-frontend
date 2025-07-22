# University Frontend Setup Guide

## Environment Configuration

### For Local Development

1. Create a `.env.local` file in the `university-frontend` directory:

```bash
# API Configuration for local development
REACT_APP_API_BASE_URL=http://localhost:3002/api
```

### For Production/Deployment

1. Create a `.env.production` file:

```bash
# API Configuration for production
REACT_APP_API_BASE_URL=https://your-backend-domain.com/api
```

### For Different Machines

To make the app work on any machine, you need to:

1. **Set the backend URL** in your environment file
2. **Update CORS settings** in the backend to allow your frontend domain
3. **Configure the database** for your environment

## Backend Configuration

### CORS Settings

Update the backend `app.js` file to include your frontend domains:

```javascript
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3003",
      "https://your-frontend-domain.com" // Add your production domain
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
  })
);
```

### Database Configuration

Update the backend `.env` file with your database connection:

```bash
# For local development
DATABASE_URL=postgresql://localhost:5432/university_db

# For production
DATABASE_URL=postgresql://username:password@host:port/database
```

## Running the Application

1. **Start the backend:**

   ```bash
   cd ../Fullstack-University-backend
   npm install
   npm start
   ```

2. **Start the frontend:**
   ```bash
   cd university-frontend
   npm install
   npm start
   ```

## Troubleshooting

- **API Connection Issues:** Check that `REACT_APP_API_BASE_URL` points to your running backend
- **CORS Errors:** Ensure your frontend domain is in the backend's CORS configuration
- **Database Issues:** Verify your database connection string and that PostgreSQL is running
