import React, { useState } from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import useLogin from '@/hooks/useLogin';

const LoginForm: React.FC = () => {
  const { login, loading } = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
    return
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button label={loading ? 'Logging in...' : 'Login'} onClick={handleSubmit} />
    </form>
  );
};

export default LoginForm;
