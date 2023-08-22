"use client";
import React, { useState } from "react";
import InputForm from "../molecules/inputForm";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <h1 className="text-3xl mb-4 font-semibold">Login</h1>
      <InputForm
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <InputForm
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        className="bg-blue text-white font-semibold p-4 rounded-xl hover:bg-blue-600 w-full mb-4"
        onClick={handleLogin}
      >
        Sign In
      </button>
      <div className="flex flex-row items-start gap-x-4 mb-2">
        <InputForm type="checkbox" />
        <p>Remember my credentials</p>
      </div>
      <div className="flex flex-col justify-center items-center mb-4">
        <p>Did you forgot your password?</p>
        <Link href="/auth/forgot_password" className="underline text-blue">Tap here for reset</Link>
      </div>
      <div className="bg-gray/10 h-0.5 mx-4 mb-4"></div>

      <div className="flex justify-center mb-4">
        <p>{"Don't have an account?"}</p>
      </div>
      <div className="flex items-center text-center">
        <Link
          className="bg-white text-blue border border-blue font-semibold p-4 rounded-xl hover:bg-blue-600 w-full mb-4"
          href="/auth/register"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
