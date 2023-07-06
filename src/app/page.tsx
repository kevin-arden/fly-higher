"use client"

import { useState } from "react";
import Header from "@/components/organisms/header";
import Image from "next/image";
import BgRight from "@public/assets/topright.svg";
import BgLeft from "@public/assets/bottomleft.svg";
import IcRightLg from "@public/assets/icons/icArrRightLg.svg";
import IcRightSm from "@public/assets/icons/icArrRightSm.svg";
import IcRightXl from "@public/assets/icons/icArrRightXl.svg";
import IcArrAround from "@public/assets/icons/icArrAround.svg";
import Button from "@/components/atoms/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [flightDate, setFlightDate] = useState<Date | null>();

  return (
    <main>
      <Header />
      <div className="relative ">
        <Image
          src={BgRight}
          alt="main icon"
          className="absolute top-0 right-0 -z-10"
        />
        <Image
          src={BgLeft}
          alt="main icon"
          className="absolute top-40 left-0 -z-10"
        />
        <div className="px-20 flex flex-row">
          <div className="py-10 w-1/2">
            <h1 className="text-6xl mb-2">
              Find your <span className="text-blue">Flight</span>
            </h1>
            <p className="font-light">and explore the world with us</p>
          </div>
          {/* card */}
          <div className="drop-shadow-lg bg-white px-10 py-8 rounded-2xl gap-y-5 grid">
            <p>
              Hey, <br /> Where you want to go?
            </p>
            <button className="flex flex-row justify-between w-full">
              <span className="text-blue"> Recently started</span>
              <Image src={IcRightLg} alt="arrow right icon" />
            </button>
            {/* destination */}
            <div className="flex flex-row justify-between drop-shadow-lg p-5 bg-white rounded-2xl">
              <div>
                <p className="text-xs">from</p>
                <p className="text-xl font-semibold">Medan</p>
                <p className="text-xs">Indonesia</p>
              </div>
              <Image src={IcArrAround} alt="arrow around" />
              <div>
                <p className="text-xs">from</p>
                <p className="text-xl font-semibold">Tokyo</p>
                <p className="text-xs">Indonesia</p>
              </div>
            </div>
            {/* select button */}
            <div className="gap-x-2 flex flex-row">
              <Button>One Way</Button>
              <Button>Round Trip</Button>
            </div>
            <div className="w-full">
              <h3>Departure</h3>
              <DatePicker
                selected={flightDate}
                onChange={(date) => setFlightDate(date)}
                className="border border-gray px-5 py-4 rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
