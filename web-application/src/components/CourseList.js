import { useState, useEffect } from 'react';
import { db } from '../firebase';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesSnapshot = await db.collection('courses').get();
      const coursesList = coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCourses(coursesList);
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses-container">
      <h2>Available Courses</h2>
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span>{course.credits} Credits</span>
          </div>
        ))}
      </div>
    </div>
  );
}