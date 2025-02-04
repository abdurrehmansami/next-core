// types/resume.ts
export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  education: {
    institution: string;
    degree: string;
    year: string;
  }[];
  experience: {
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
  skills: string[];
}
