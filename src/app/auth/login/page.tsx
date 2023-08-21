"use client";
import React, { useState } from "react";
import IcPlaneLarge from "@public/assets/icons/icPlaneLarge.svg";
import Image from "next/image";
import icPlane from "@public/illustration.svg";
import InputForm from "@/components/molecules/inputForm";

export default function Login() {
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

  const handleLogin = () => {
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="relative h-screen flex flex-row ">
      <div className="bg-blue p-32">
        <Image src={IcPlaneLarge} alt="main auth logo" />
      </div>
      <div className="px-32 py-12">
        <div className="flex flex-row gap-2 items-center mb-20">
          <Image src={icPlane} alt="main icon" />
          <h1 className="text-xl font-semibold">Fly Higher</h1>
        </div>
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
          onClick={handleLogin}
        >
          Sign Up
        </button>
        <div className="flex flex-row items-start gap-x-4">
          <InputForm type="checkbox" />
          <p>Remember my credentials</p>
        </div>
        <div className="bg-gray/10 h-0.5 mx-4 mb-4"></div>
        <div className="flex  justify-center mb-4">
          <p>Already have an account?</p>
        </div>
        <button
          className="bg-white text-blue border border-blue font-semibold p-4 rounded-xl hover:bg-blue-600 w-full mb-4"
          onClick={handleLogin}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
