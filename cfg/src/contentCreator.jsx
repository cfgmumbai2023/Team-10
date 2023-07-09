

import React, { useState } from 'react';
import './contentCreator.css';

const FormSection = () => {
  const [url, setUrl] = useState('');
  const [className, setClassName] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [tags, setTags] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/createVideo', {
      
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoUrl: url,
          videoName: topic,
          standard: className,
          subject: subject,
          tags: tags.split(',').map(tag => tag.trim()), // Split the tags string into an array and trim each tag
        }),
      });
  
      if (response.ok) {
        console.log('Video uploaded successfully');
      } else {
        console.error('Error uploading video');
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className="form-section">
      <h2>Form Section</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="class">Class:</label>
          <input
            type="text"
            id="class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter Class"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter Subject"
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter Topic"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter Tags (comma-separated)"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <h2>Profile Section</h2>
      <div className="profile">
        <div>
          <strong>Name:</strong> John Doe
        </div>
        <div>
          <strong>Age:</strong> 25
        </div>
        <div>
          <strong>Location:</strong> New York
        </div>
        <div>
          <strong>Occupation:</strong> Software Developer
        </div>
      </div>
    </div>
  );
};

const CreatorForm = () => {
  return (
    <div className="app">
      <FormSection />
      <ProfileSection />
    </div>
  );
};

export default CreatorForm;
