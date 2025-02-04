// app/(main)/hooks/useResumeData.ts
import { useState } from "react";
import { ResumeData } from "@/types/resume";

const useResumeData = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: { name: "", email: "", phone: "", address: "" },
    education: [],
    experience: [],
    skills: [],
  });

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData((prev) => ({ ...prev, [section]: data }));
  };

  return { resumeData, updateResumeData };
};

export default useResumeData;
