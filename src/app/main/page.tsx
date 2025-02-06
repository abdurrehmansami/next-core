// app/(main)/page.tsx
'use client';
import React, { useEffect } from 'react';
import Form from './components/Form';
import ResumePreview from './components/Resume/ResumePreview';
import { useStoreActions } from 'easy-peasy';
import { ResumeStoreModel } from './store/resumestore';

const Home: React.FC = () => {
  // const loadResume = useStoreActions((actions) => actions.loadResume);
  const loadResume = useStoreActions((actions: ResumeStoreModel) => actions.loadResume);
  useEffect(() => {
    loadResume;
  }, [loadResume]);

  return (
    <div className="flex min-h-screen p-8">
      <Form />
      <ResumePreview />
    </div>
  );
};

export default Home;