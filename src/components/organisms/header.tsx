import React from "react";
import icPlane from "@public/illustration.svg";
import Image from "next/image";
import Button from "../atoms/Button";
import TransparentButton from "../atoms/TransparentButton";

function Header() {
  return (
    <div className="py-10 px-20 flex flex-row justify-between">
      <div className="flex flex-row gap-2 items-center">
        <Image src={icPlane} alt="main icon" />
        <h1 className="text-xl font-semibold">Fly Higher</h1>
      </div>
      <div>
        <TransparentButton>Search</TransparentButton>
        <TransparentButton>Find Ticket</TransparentButton>
        <TransparentButton>My Booking</TransparentButton>
      </div>
      <Button>Sign Up</Button>
    </div>
  );
}

export default Header;
