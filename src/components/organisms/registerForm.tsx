"use client";
import React, { useState } from "react";
import InputForm from "../molecules/inputForm";
import Link from "next/link";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleFullNameChange = (e: any) => {
    setFullName(e.target.value);
  };

  const handleRegister = () => {
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <h1 className="text-3xl mb-4 font-semibold">Register</h1>
      <InputForm
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={handleFullNameChange}
      />
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
        onClick={handleRegister}
      >
        Sign Up
      </button>
      <div className="bg-gray/10 h-0.5 mx-4 mb-4"></div>
      <div className="flex  justify-center pb-4">
        <p>Already have an account?</p>
      </div>
      <div className="flex items-center text-center">
        <Link
          href="/auth/login"
          className="bg-white text-blue border border-blue font-semibold p-4 rounded-xl hover:bg-blue-600 w-full mb-4"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
