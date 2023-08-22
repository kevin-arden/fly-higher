import React from "react";
import IcPlaneLarge from "@public/assets/icons/icPlaneLarge.svg";
import Image from "next/image";
import icPlane from "@public/illustration.svg";
import Link from "next/link";

export default function FrontPage({ children }: any) {
  return (
    <div className="relative h-screen flex flex-row ">
      <div className="bg-blue p-32">
        <Image src={IcPlaneLarge} alt="main auth logo" />
      </div>
      <div className="px-32 py-12">
        <Link href="/">
          <div className="flex flex-row gap-2 items-center mb-20">
            <Image src={icPlane} alt="main icon" />
            <h1 className="text-xl font-semibold">Fly Higher</h1>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
}
