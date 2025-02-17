import React from "react";
// import Input from "@/components/common/Input";
// import Button from "@/components/common/Button";
// import useLogin from "@/hooks/useLogin";
// import { useForm } from "@/hooks/useForm";

const LoginForm: React.FC = () => {
  // const { login, loading } = useLogin();
  // const { values, handleChange, resetForm } = useForm({ username: "", password: "" });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   login(values.username, values.password);
  //   resetForm()
  // };

  return (
    // <form onSubmit={handleSubmit} classNameName="p-4">
    //   <Input
    //     placeholder="Username"
    //     name="username"
    //     value={values.username}
    //     onChange={handleChange}
    //   />
    //   <Input
    //     placeholder="Password"
    //     type="password"
    //     name="password"
    //     value={values.password}
    //     onChange={handleChange}
    //   />
    //   <Button label={loading ? "Logging in..." : "Login"} onClick={handleSubmit} />
    // </form>
    
    <div className="flex items-center justify-center w-[100%] h-screen">
        <div className="bg-[#ffffff] flex flex-col justify-center items-center gap-4 p-4 shadow-2xl rounded-xl max-w-md w-full">
            <div className="space-y-4 flex flex-col justify-center items-center">
                <img src='/assets/logo/logo.png' alt="Logo" className="w-50"/>
                <h2 className="text-[#202225] text-2xl font-semibold text-center">Login to your account</h2>
                <p className="text-[#545A62] text-center">Please enter your account credentials.</p>
            </div>
            <form className="w-full px-2">
                {/* <!-- Email Field --> */}
                <div className="mb-8">
                    <label className="block text-xs font-bold text-[#545A62]">EMAIL</label>
                    <input type="email" placeholder="Enter your account email" className="w-full p-3 mt-1 shadow-md rounded-lg transition placeholder:text-sm text-[#545A62]"/>
                </div>

                {/* <!-- Password Field --> */}
                <div className="mb-8">
                    <label className="block text-xs font-bold text-[#545A62]">PASSWORD</label>
                    <input type="password" placeholder="Enter your account password" className="w-full p-3 mt-1 shadow-md rounded-lg transition placeholder:text-sm text-[#545A62]"/>
                </div>

                {/* <!-- Forgot Password Link --> */}
                <div className="text-right">
                    <a href="#" className="text-[#1ED760] text-sm">Forgot your password?</a>
                </div>

                {/* <!-- Sign In Button --> */}
                <button type="submit" className="w-full bg-[#1ED760] text-white font-semibold py-2 mt-4 rounded-lg">
                    SIGN IN
                </button>
            </form>
        </div>
    </div>




  );
};

export default LoginForm;
