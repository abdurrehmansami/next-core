// app/(main)/components/Form/Section.tsx
import React from 'react';
import InputField from './InputField';

interface SectionProps {
  title: string;
  fields: { label: string; name: string }[];
  data: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Section: React.FC<SectionProps> = ({ title, fields, data, onChange }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {fields.map((field) => (
      <InputField
        key={field.name}
        label={field.label}
        name={field.name}
        value={data[field.name]}
        onChange={onChange}
      />
    ))}
  </div>
);

export default Section;