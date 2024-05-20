import React from "react";
import { Image, Button, Link } from "@nextui-org/react";
import "./advertisement.css";

export default function Advertisement() {
  return (
    <>
      <div className="box relative">
        <Link href="https://twitch.tv/yaksath" isExternal>
        <Image
          className="img py-4"
          isBlurred
          isZoomed
          src="/news.png"
          alt="News"
        ></Image>
        </Link>
      </div>
    </>
  );
}
{
  /* <button className="text-black absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            Button
        </button> */
}
