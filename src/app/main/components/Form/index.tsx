// app/(main)/components/Form/index.tsx
import React from 'react';
import Section from './Section';
import { ResumeData } from '@/types/resume';

interface FormProps {
  resumeData: ResumeData;
  updateResumeData: (section: keyof ResumeData, data: any) => void;
}

const Form: React.FC<FormProps> = ({ resumeData, updateResumeData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateResumeData('personalInfo', { ...resumeData.personalInfo, [name]: value });
  };

  return (
    <div className="w-1/2 p-4">
      <Section
        title="Personal Information"
        fields={[
          { label: 'Name', name: 'name' },
          { label: 'Email', name: 'email' },
          { label: 'Phone', name: 'phone' },
          { label: 'Address', name: 'address' },
        ]}
        data={resumeData.personalInfo}
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;