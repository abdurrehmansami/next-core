"use client";

import { useState } from "react";

type FormState = Record<string, any>;

export const useForm = <T extends FormState>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => setValues(initialState);

  return { values, handleChange, resetForm };
};
