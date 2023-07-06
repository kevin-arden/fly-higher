import React from "react";

interface ButtonProps {
  children: any;
  onClick?: () => void;
}

function TransparentButton({ children, onClick }: ButtonProps) {
  return (
    <button
      className="py-4 px-11 rounded-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TransparentButton;
