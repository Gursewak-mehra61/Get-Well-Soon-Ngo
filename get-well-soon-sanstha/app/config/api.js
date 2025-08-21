// API Configuration
const API_CONFIG = {
  // Use environment variable if available, otherwise fallback to production URL
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://get-well-soon-ngo.onrender.com',
  
  // Development fallback
  DEV_URL: 'http://localhost:4000',
  
  // Production URL (replace with your actual backend URL when deployed)
  PROD_URL: 'https://get-well-soon-ngo.onrender.com'
};

// Get the appropriate API URL based on environment
export const getApiUrl = () => {
  // Check if we're in browser and on localhost (development)
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return API_CONFIG.DEV_URL;
  }
  
  // In production, use environment variable or fallback to production URL
  return process.env.NEXT_PUBLIC_API_URL || API_CONFIG.PROD_URL;
};

// API endpoints
export const API_ENDPOINTS = {
  CONTACT_SUBMIT: '/api/contact/submit',
  VOLUNTEER_SUBMIT: '/api/volunteer/submit',
  VOLUNTEER_LIST: '/api/volunteer/list',
  AUTH_LOGIN: '/api/auth/login',
  HEALTH: '/api/health'
};

// Helper function to build full API URL
export const buildApiUrl = (endpoint) => {
  return `${getApiUrl()}${endpoint}`;
};

export default API_CONFIG;
