// src/services/userService.js
import api from '../apis/axios';

// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/api/users/register/', userData);
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
