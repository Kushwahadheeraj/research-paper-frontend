import React from "react";
import HelpVideo from "../Image/help.mp4"

export default function HelpPost() {
  return (
    <>
      <div className=" mt-20 text-center">
        <h1 className="text-4xl font-bold ">Help Page</h1>
      </div>
      <div className="mt-20 mb-20 xl:mr-10 xl:ml-10 border-2 border-indigo-600">
        <video className="w-full h-auto max-w-full" src={HelpVideo} autoPlay muted controls />
      </div>
    </>
  );
}