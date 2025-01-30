import React from 'react';

type InputProps = {
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, type = 'text', value, onChange }) => {
  return <input className="border px-2 py-1 w-full" placeholder={placeholder} type={type} value={value} onChange={onChange} />;
};

export default Input;
