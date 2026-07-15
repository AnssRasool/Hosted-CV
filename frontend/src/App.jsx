import React, { useState, useEffect } from 'react';
import Resume from './components/Resume';
import './index.css';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from Flask backend
    fetch('http://127.0.0.1:5000/api/resume')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setResumeData(data))
      .catch(err => {
        console.error("Error fetching resume data:", err);
        setError("Failed to load resume data. Please ensure the backend server is running.");
      });
  }, []);

  return (
    <>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <Resume data={resumeData} />
      )}
    </>
  );
}

export default App;
