import Image from "next/image";
import React from "react";
import icPlane from "@public/illustration.svg";
import icGoogle from "@public/assets/logo/google.svg";
import icApple from "@public/assets/logo/apple.svg";
import icFacebook from "@public/assets/logo/facebook.svg";
import icTwitter from "@public/assets/logo/twitter.svg";
import icInstagram from "@public/assets/logo/instagram.svg";
import icYoutube from "@public/assets/logo/youtube.svg";

export default function Footer() {
  return (
    <div className="px-32 py-16">
      <div className="flex flex-row justify-between mb-6">
        <div className="w-1/4">
          <div className="flex flex-row gap-2 items-center mb-4">
            <Image src={icPlane} alt="main icon" />
            <h1 className="text-xl font-semibold">Fly Higher</h1>
          </div>
          <p>
            Find your Flight and explore the world with us. We will take care of
            the rest
          </p>
        </div>
        <div>
          <p className="mb-4">Features</p>
          <div className="grid gap-y-4">
            <p>Find Ticket</p>
            <p>My Booking</p>
            <p>Chat</p>
            <p>Notification</p>
          </div>
        </div>
        <div>
          <p className="mb-4">Download Fly Higher App</p>
          <div className="grid gap-y-4">
            <Image src={icApple} alt="apple icon" />
            <Image src={icGoogle} alt="google icon" />
          </div>
        </div>
        <div>
          <p className="mb-4">Follow Us</p>
          <div className="flex flex-row gap-x-4">
            <Image src={icFacebook} alt="facebook icon" />
            <Image src={icTwitter} alt="twitter icon" />
            <Image src={icInstagram} alt="instagram icon" />
            <Image src={icYoutube} alt="youtube icon" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <p>© Ankasa. All Rights Reserved.</p>
        <p>Jakarta Indonesia</p>
      </div>
    </div>
  );
}
