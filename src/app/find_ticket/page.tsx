"use client"

import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import React from "react";
import IcPlaneWhiteSmall from "@public/assets/icons/icPlaneWhiteSmall.svg";
import Image from "next/image";
import IcArrAroundWhite from "@public/assets/icons/icArrAroundWhite.svg";
import IcSortBlack from "@public/assets/icons/icSortBlack.svg";
import IcArrUp from "@public/assets/icons/icArrUp.svg";
import IcArrDown from "@public/assets/icons/icArrDown.svg";
import Garuda from "@public/assets/logo/garuda.svg";
import IcPlaneGrey from "@public/assets/icons/icPlaneGraySmall.svg";
import IcBurger from "@public/assets/icons/icBurger.svg";
import IcLuggage from "@public/assets/icons/icLuggage.svg";
import IcWifi from "@public/assets/icons/icWifi.svg";
import Button from "@/components/atoms/Button";

export default function FindTicket() {


  return (
    <div>
      <Header />
      <div className="bg-[url('/assets/icons/icPlaneMedium.svg')] bg-no-repeat bg-blue rounded-b-xl px-36 py-4 flex flex-row text-white justify-between items-center">
        <div className="flex flex-row">
          <Image src={IcPlaneWhiteSmall} alt="image medium" />
          <div className="p-4">
            <div className="flex flex-row justify-between drop-shadow-lg  rounded-2xl  gap-x-4 mb-1">
              <div>
                <p className="text-xs">From</p>
                <p className="text-xl font-semibold">Medan</p>
                <p className="text-xs">Indonesia</p>
              </div>
              <Image src={IcArrAroundWhite} alt="arrow around" />
              <div>
                <p className="text-xs">To</p>
                <p className="text-xl font-semibold">Tokyo</p>
                <p className="text-xs">Indonesia</p>
              </div>
            </div>
            <div className="text-xs font-thin">
              Monday, 20 July 20 6 Passenger Economy
            </div>
          </div>
        </div>
        <div>
          <p className="text-white">Change search</p>
        </div>
      </div>
      <div className="p-8 bg-[#F5F6FA] flex flex-row gap-x-4">
        <div className="w-1/4 ">
          <div className="flex flex-row justify-between mb-4">
            <p className="text-lg font-semibold">Filter</p>
            <p className="self-center text-sm font-semibold text-blue">Reset</p>
          </div>
          <div className="bg-white p-4 rounded-xl grid gap-y-2">
            <div>
              <div className="flex flex-row justify-between mb-4">
                <p>Transit</p>
                <p>Icon</p>
              </div>
              <div className="grid gap-y-3 mb-4">
                <div className="flex flex-row justify-between">
                  <p>Direct</p>
                  <p>Icon</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Transit</p>
                  <p>Icon</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Transit 2+</p>
                  <p>Icon</p>
                </div>
              </div>
              <div className="bg-gray h-0.5 w-full"></div>
            </div>
            <div>
              <div className="flex flex-row justify-between mb-4">
                <p>Transit</p>
                <p>Icon</p>
              </div>
              <div className="grid gap-y-3 mb-4">
                <div className="flex flex-row justify-between">
                  <p>Direct</p>
                  <p>Icon</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Transit</p>
                  <p>Icon</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Transit 2+</p>
                  <p>Icon</p>
                </div>
              </div>
              <div className="bg-gray h-0.5 w-full"></div>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex flex-row justify-between mb-4">
            <p className="text-lg font-semibold">
              Select Ticket{" "}
              <span className="text-sm font-normal text-gray">
                (6 flight found)
              </span>
            </p>
            <p className="self-center text-sm font-semibold flex flex-row gap-x-2">
              Sort by <Image src={IcSortBlack} alt="sort" />
            </p>
          </div>
          {/* card */}
          <div className="bg-white p-7 rounded-xl grid gap-y-8">
            <div className="flex flex-row gap-x-4">
              <Image src={Garuda} alt="plane_log" />
              <p className="self-center">Garuda Indonesia</p>
            </div>
            <div className="flex flex-row justify-between">
              <section className="flex flex-row gap-x-4">
                <div>
                  <p className="text-2xl font-semibold">IDN</p>
                  <p>12:33</p>
                </div>
                <Image src={IcPlaneGrey} alt="icPlane" />
                <div>
                  <p className="text-2xl font-semibold">JPN</p>
                  <p>15:21</p>
                </div>
              </section>
              <time className="text-center text-gray">
                <p className="text-lg">3 hours 11 minutes</p>
                <p>1 transit</p>
              </time>
              <figure className="flex flex-row gap-x-2">
                <Image src={IcBurger} alt="ic_burger" />
                <Image src={IcLuggage} alt="ic_Luggage" />
                <Image src={IcWifi} alt="ic_Wifi" />
              </figure>
              <section className="self-center">
                <p className="text-blue">
                  $ 214,00 <span className="text-gray">/pax</span>
                </p>
              </section>
              <Button>Select</Button>
            </div>
            <div className="flex flex-row gap-x-4">
              <p className="text-blue font-semibold">View Details</p>
              <Image src={IcArrDown} alt="ic_down" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
