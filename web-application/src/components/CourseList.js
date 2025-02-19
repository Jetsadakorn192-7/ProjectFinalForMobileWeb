import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../styles/CourseList.css';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses')); // ดึงข้อมูลจาก Firestore
        const courseData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCourses(courseData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="course-list-container">
      <h1>Available Courses</h1>
      <ul>
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.id} onClick={() => handleCourseClick(course.id)}>
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Credits: {course.credits}</p>
            </li>
          ))
        ) : (
          <p>Loading courses...</p>
        )}
      </ul>
    </div>
  );
}

export default CourseList;