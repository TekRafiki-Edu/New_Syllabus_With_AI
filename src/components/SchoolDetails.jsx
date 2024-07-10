import React, { useState, useEffect } from 'react';
import './components_styles/SchoolDetails.css';

const SchoolDetails = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    // Fetch departments from API
    const fetchDepartments = async () => {
      // Replace with your API call
      const departmentsData = await fetchDepartmentsAPI();
      setDepartments(departmentsData);
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      // Fetch courses based on selected department from API
      const fetchCourses = async () => {
        // Replace with your API call
        const coursesData = await fetchCoursesAPI(selectedDepartment);
        setCourses(coursesData);
      };

      fetchCourses();
    }
  }, [selectedDepartment]);

  const fetchDepartmentsAPI = async () => {
    // Mock data, replace with API call
    return [
      { id: 'comp_sci', name: 'Computer Science' },
      { id: 'math', name: 'Mathematics' },
      // Add more departments as needed
    ];
  };

  const fetchCoursesAPI = async (departmentId) => {
    // Mock data, replace with API call
    const mockCourses = {
      comp_sci: [
        { id: 'cs101', name: 'Introduction to Computer Science' },
        { id: 'cs102', name: 'Data Structures' },
        // Add more courses as needed
      ],
      math: [
        { id: 'math101', name: 'Calculus I' },
        { id: 'math102', name: 'Linear Algebra' },
        // Add more courses as needed
      ],
    };
    return mockCourses[departmentId] || [];
  };

  return (
    <div className="school-details">
      <div className="form-group">
        <label htmlFor="department">Department Name:</label>
        <select
          id="department"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="">Select a department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="course">Course Name:</label>
        <select
          id="course"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          disabled={!selectedDepartment}
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SchoolDetails;
