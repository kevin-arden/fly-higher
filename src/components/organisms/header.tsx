import React from "react";
import icPlane from "@public/illustration.svg";
import Image from "next/image";
import Button from "../atoms/Button";
import TransparentButton from "../atoms/TransparentButton";
import Link from "next/link";

function Header() {
  return (
    <div className="py-10 px-20 flex flex-row justify-between">
      <Link href="/" className="flex flex-row gap-2 items-center">
        <Image src={icPlane} alt="main icon" />
        <h1 className="text-xl font-semibold">Fly Higher</h1>
      </Link>
      <div>
        <TransparentButton>Search</TransparentButton>
        <Link href="/find_ticket">
          <TransparentButton>Find Ticket</TransparentButton>
        </Link>
        <TransparentButton>My Booking</TransparentButton>
      </div>
      <Link
        href="/auth/register"
        className="py-4 px-11 text-white bg-blue rounded-xl"
      >
        <p>Sign Up</p>
      </Link>
    </div>
  );
}

export default Header;
