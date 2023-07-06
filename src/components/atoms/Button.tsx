import React from "react";

interface ButtonProps {
  children: any;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="py-4 px-11 text-white bg-blue rounded-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
