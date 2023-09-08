import Image from 'next/image';
import React from 'react'
import IcArrAround from "@public/assets/icons/icArrAround.svg";

export default function SelectDestionation() {
  return (
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
  );
}
