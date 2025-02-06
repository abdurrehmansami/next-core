// app/(main)/components/Resume/ResumePreview.tsx
'use client';
import React from 'react';
import { useStoreState } from 'easy-peasy';
import { ResumeStoreModel} from '../../store/resumestore' // Import the store model

const ResumePreview: React.FC = () => {
  // Use typed hooks
  const resumeData = useStoreState((state: ResumeStoreModel) => state.resumeData);

  return (
    <div id="resume-preview" className="w-1/2 p-4 bg-white shadow-lg">
      <h1 className="text-2xl font-bold">{resumeData.personalInfo.name}</h1>
      <p>{resumeData.personalInfo.email}</p>
      <p>{resumeData.personalInfo.phone}</p>
      <p>{resumeData.personalInfo.address}</p>
    </div>
  );
};

export default ResumePreview;