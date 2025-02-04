"use client";

import React from 'react';

type InputProps = {
  placeholder?: string;
  type?: string;
  value: string;
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, type = 'text',name, value, onChange }) => {
  return <input className="border px-2 py-1 w-full" placeholder={placeholder} type={type} value={value} name={name} onChange={onChange} />;
};

export default Input;
