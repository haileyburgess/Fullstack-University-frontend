// CORS Configuration Utility

export const corsConfig = {
  // Development configuration
  development: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
  },

  // Production configuration
  production: {
    origin: process.env.REACT_APP_FRONTEND_URL || "https://your-domain.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
  }
};

// Get current CORS configuration based on environment
export const getCorsConfig = () => {
  return process.env.NODE_ENV === "production"
    ? corsConfig.production
    : corsConfig.development;
};

// Create headers for API requests
export const createApiHeaders = (additionalHeaders = {}) => {
  const config = getCorsConfig();

  return {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    ...additionalHeaders
  };
};

// Handle CORS preflight requests
export const handleCorsPreflight = (req, res) => {
  const config = getCorsConfig();

  res.setHeader("Access-Control-Allow-Origin", config.origin);
  res.setHeader("Access-Control-Allow-Methods", config.methods.join(", "));
  res.setHeader(
    "Access-Control-Allow-Headers",
    config.allowedHeaders.join(", ")
  );
  res.setHeader("Access-Control-Allow-Credentials", config.credentials);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return true;
  }

  return false;
};
