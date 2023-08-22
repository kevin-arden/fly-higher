"use client"
import React, { useState } from "react";
import InputForm from "../molecules/inputForm";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1 className="text-3xl mb-4 font-semibold">Forgot Password</h1>
      <InputForm
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <button className="text-white p-4 bg-blue w-full rounded-xl mb-4 font-semibold">Send</button>
      <p className="text-center text-sm">{"You'll get message soon on your email"}</p>
    </div>
  );
}
