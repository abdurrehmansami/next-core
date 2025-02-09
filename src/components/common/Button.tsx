import React from 'react';

type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
