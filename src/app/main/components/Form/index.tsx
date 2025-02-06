// app/(main)/components/Form/index.tsx
'use client';
import React from 'react';
import Section from './Section';
import { useStoreActions, useStoreState } from 'easy-peasy';
import {ResumeStoreModel} from '../../store/resumestore'
import { ResumeData } from '@/types/resume';
const Form: React.FC = () => {
  // const resumeData = useStoreState((state) => state.resumeData);
  // const saveResume = useStoreActions((actions) => actions.saveResume);
  // // Use typed hooks
  const resumeData = useStoreState((state: ResumeStoreModel) => state.resumeData);
  const saveResume = useStoreActions((actions: ResumeStoreModel) => actions.saveResume);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData: ResumeData = {
      ...resumeData,
      personalInfo: { ...resumeData.personalInfo, [name]: value },
    };
    saveResume(updatedData);
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