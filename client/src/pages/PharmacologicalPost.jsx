import React from "react";
import PharmacologicalBiological from "./PharmacologicalBiological";
import PharmacologicalPlant from "./PharmacologicalPlant";
import PharmacologicalCereal from "./PharmacologicalCereals";

export default function PharmacologicalPost() {


  return (
    <>
      <div className=" mt-20 text-center">
        <h1 className="text-4xl font-bold ">Biological activities of ADME-qualified phytometaboites from cereals</h1>
      </div>
      <PharmacologicalBiological />

      <div className=" mt-10 text-center">
        <h1 className="text-4xl font-bold ">Plant-wise distribution of cereal phytometabolites and their associated biological activities</h1>
      </div>
      <PharmacologicalPlant />


      <div className=" mt-10 text-center">
        <h1 className="text-4xl font-bold ">Dominant biological activities of phytometabolites in different Cereals</h1>
      </div>
      <PharmacologicalCereal />



    </>
  );
}