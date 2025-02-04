import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import useLogin from "@/hooks/useLogin";
import { useForm } from "@/hooks/useForm";

const LoginForm: React.FC = () => {
  const { login, loading } = useLogin();
  const { values, handleChange, resetForm } = useForm({ username: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(values.username, values.password);
    resetForm()
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <Input
        placeholder="Username"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <Button label={loading ? "Logging in..." : "Login"} onClick={handleSubmit} />
    </form>
  );
};

export default LoginForm;
