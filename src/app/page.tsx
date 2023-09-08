"use client";

import { forwardRef, useState } from "react";
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
import { HiddenSelect } from "@react-aria/select";
import Tokyo from "@public/assets/images/tokyo.svg";
import Barcelona from "@public/assets/images/barcelona.svg";
import Footer from "@/components/organisms/footer";
import SelectDestionation from "@/components/molecules/SelectDestionation";

export default function Home() {
  const [flightDate, setFlightDate] = useState<Date | null>();

  const CustomInput = ({ value, onClick }: any) => (
    <button
      onClick={onClick}
      className="py-4 px-5 border border-lightgray rounded-xl flex flex-row justify-between items-center w-full"
    >
      <p>{value ? value : `Select departure date`}</p>
      <Image src={IcRightSm} alt="main icon" />
    </button>
  );

  // let ref = React.useRef(null);

  return (
    <main>
      <Header />
      {/* part 1 */}
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
            <SelectDestionation />
            {/* select button */}
            <div className="gap-x-2 flex flex-row">
              <Button>One Way</Button>
              <Button>Round Trip</Button>
            </div>
            <div className="w-full">
              <h3 className="mb-3.5">Departure</h3>
              <DatePicker
                selected={flightDate}
                onChange={(date) => setFlightDate(date)}
                customInput={<CustomInput />}
              />
            </div>
            {/* customer count */}
            <div className="w-full">
              <h3 className="mb-3.5">How many person?</h3>
              <div className="gap-x-2 flex flex-row">
                <select
                  name="cars"
                  id="cars"
                  className="p-4 border border-lightgray rounded-xl w-full"
                >
                  <option value="">- Adults</option>
                  <option value="1">1 Adults</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
                <select
                  name="cars"
                  id="cars"
                  className="p-4 border border-lightgray rounded-xl w-full"
                >
                  <option value="">- Children</option>
                  <option value="1">1 Children</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                  <option value="4">4 Children</option>
                </select>
              </div>
            </div>
            {/* class */}
            <div className="w-full">
              <h3 className="mb-3.5">Which class do you want?</h3>
              <div
                onChange={(e: any) => {
                  console.log(e.target?.value);
                }}
                className="flex flex-row gap-x-2"
              >
                <input type="radio" value="Male" name="gender" />
                <label>Male</label>
                <input type="radio" value="Female" name="gender" />
                <label>Female</label>
                <input type="radio" value="Other" name="gender" />
                <label>Other</label>
              </div>
            </div>
            <Button>Search Flight</Button>
          </div>
        </div>
      </div>
      {/* part 2 */}
      <div className="p-20">
        {/* header */}
        <div className="">
          <p>Trending</p>
          <div className="flex flex-row justify-between mb-8">
            <p>Trending destinations</p>
            <p>View all</p>
          </div>
          <div className="flex flex-row gap-x-2">
            {}
            <div className="px-5  py-3 bg-white drop-shadow-lg w-fit rounded-xl">
              <div className="relative mb-2">
                <Image src={Tokyo} alt="tokyo" className="rounded-xl" />
                <div className="absolute top-0 left-0 p-1 m-1 bg-gray/60 rounded-full">
                  <p className="text-white">24 Airlines</p>
                </div>
              </div>
              <p className="text-md">
                Tokyo, <br /> <span className="text-2xl">Japan</span>
              </p>
            </div>
            <div className="p-3 bg-white drop-shadow-lg w-fit rounded-xl">
              <div className="relative mb-2">
                <Image src={Tokyo} alt="tokyo" className="rounded-xl" />
                <div className="absolute top-0 left-0 p-1 m-1 bg-gray/60 rounded-full">
                  <p className="text-white">24 Airlines</p>
                </div>
              </div>
              <p className="text-md">
                Tokyo, <br /> <span className="text-2xl">Japan</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* part 3 */}
      <div className="mx-20 my-10 px-32 py-16 items-center  bg-blue rounded-3xl">
        <div className="text-center text-white flex flex-col justify-center">
          <p className="font-thin">Top 10 destinations</p>
          <p className="font-semibold text-lg">TOP 10</p>
        </div>
        <div className="flex flex-row gap-x-4">
          <div className="text-center">
            <div className="relative inline-block  rounded-full">
              <div className="relative border-4 border-white rounded-full">
                <Image
                  src={Barcelona}
                  className="w-32 h-32  border-4 rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <p className="text-white">BARCELONA</p>
          </div>
          <div className="text-center">
            <div className="relative inline-block  rounded-full">
              <div className="relative border-4 border-white rounded-full">
                <Image
                  src={Barcelona}
                  className="w-32 h-32  border-4 rounded-full"
                  alt="image"
                />
              </div>
            </div>
            <p className="text-white">BARCELONA</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
