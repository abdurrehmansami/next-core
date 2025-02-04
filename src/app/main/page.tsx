// app/(main)/page.tsx
'use client'; // Mark this as a Client Component
import React from 'react';
import Form from './components/Form';
import ResumePreview from './components/Resume/ResumePreview';
import useResumeData from './hooks/useResumeData';

const Home: React.FC = () => {
  const { resumeData, updateResumeData } = useResumeData();

  return (
    <div className="flex min-h-screen p-8">
      <Form resumeData={resumeData} updateResumeData={updateResumeData} />
      <ResumePreview resumeData={resumeData} />
    </div>
  );
};

export default Home;