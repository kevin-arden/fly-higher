import Image from "next/image";
import React from "react";

interface props {
  text: string;
  image: any;
}

export const RoundedCard = ({ text, image }: props) => {
  return (
    <div className="text-center">
      <div className="relative inline-block  rounded-full">
        <div className="relative border-4 border-white rounded-full">
          <Image
            src={image}
            className="w-32 h-32  border-4 rounded-full"
            alt="image"
          />
        </div>
      </div>
      <p className="text-white">{text}</p>
    </div>
  );
};
