// app/(main)/components/Resume/ResumePreview.tsx
import React from 'react';
import { ResumeData } from '@/types/resume';
import Button from '../shared/Button';

interface ResumePreviewProps {
  resumeData: ResumeData;
}
const handleDownload = async () => {
    const element = document.getElementById('resume-preview');
    if (element) {
      const response = await fetch('/api/generatePdf', {
        method: 'POST',
        body: JSON.stringify({ html: element.innerHTML }),
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      a.click();
    }
  };
const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData }) => (
  <div id="resume-preview" className="w-1/2 p-4 bg-white shadow-lg">
    <Button onClick={handleDownload}>Download PDF</Button>
    <h1 className="text-2xl font-bold">{resumeData.personalInfo.name}</h1>
    <p>{resumeData.personalInfo.email}</p>
    <p>{resumeData.personalInfo.phone}</p>
    <p>{resumeData.personalInfo.address}</p>
  </div>
);

export default ResumePreview;