// src/services/userService.js
import api from '../apis/axios';

// Function to register a student
export const registerStudent = async (studentData) => {
  try {
    const response = await api.post('/api/students/register/', studentData); // Adjust endpoint if needed
    return response.data;
  } catch (error) {
    console.error('Error registering student:', error);
    throw error;
  }
};

// Function to register a lecturer
export const registerLecturer = async (lecturerData) => {
  try {
    const response = await api.post('/api/lecturers/register/', lecturerData); // Adjust endpoint if needed
    return response.data;
  } catch (error) {
    console.error('Error registering lecturer:', error);
    throw error;
  }
};
