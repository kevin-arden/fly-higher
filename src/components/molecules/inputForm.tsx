"use client"
import React, { useState } from 'react'

export default function InputForm({ type, label, placeholder, value, onChange }: any) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
      <div className="mb-4">
        <input
          type={type}
          placeholder={placeholder}
          className={`transition border-b ${
            isFocused ? "p-4 border-gray pr-32" : "border-[#D2C2FF] p-4 pr-32"
          } w-full`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
        />
      </div>
    );

}
