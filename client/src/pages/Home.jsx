import React from "react";
import BannerProduct from "../components/BannerProduct";

export default function Home() {
  return (
    <div className="home__component">
      <div className="pt-24 pb-4 ">
        <BannerProduct />
        <div className="mt-10 px-2 xl:ml-10 xl:mr-10">
          <div className='flex flex-col gap-3 text-justify text-lg text-gray-800'>
            <p >
              <span className="text-2xl text-gray-1000 font-semibold">The Food Drugs and Pharmacology (FDP)</span> is a curated digital platform
              designed to provide researchers with comprehensive information on secondary
              metabolites found in plants. It compiles data from various reliable sources,
              including research articles, established databases, and other trustworthy
              resources..
            </p>
          </div>
        </div>
        <div className="mt-10 xl:ml-10 xl:mr-10  border-t-4 border-indigo-200">
          <div >
            <h1 className="text-3xl font-semibold font">ABOUT FDP</h1>
          </div>
          <div className="xl:ml-6 " >
            <h3 className="text-xl font-semibold font">Current Scope:</h3>
            <div className='flex flex-col  gap-3 text-lg text-justify xl:ml-4 px-2 text-gray-800'>
              <p><span className="text-xl font-semibold text-gray-600">Cereals:</span> The current iteration of FDP houses information on secondary metabolites
                found in cereals. The CMDb (Cereal Metabolite Database) provides ADME
                (Absorption, Distribution, Metabolism, and Excretion) analysis, classification and
                associated pharmacological activities.
              </p>
            </div>
          </div>
          <div className="xl:ml-6 " >
            <h3 className="text-xl font-semibold font">Future Expansion:</h3>
            <div className='flex flex-col gap-3 xl:ml-4 px-2 text-justify text-lg text-gray-800'>
              <p>FDP is actively undergoing development with plans to incorporate data on
                secondary metabolites from diverse plant sources.
              </p>
            </div>
          </div>
          <div className="xl:ml-6 " >
            <h3 className="text-xl font-semibold font">Significance for Research:</h3>
            <div className='flex flex-col gap-3 xl:ml-4 px-2 text-justify text-lg text-gray-800'>
              <p>FDP aspires to be the most extensive online platform for plant secondary
                metabolite data, ultimately becoming a one-stop shop for researchers in
                various fields.
              </p>
              <p>
                <span className="text-xl font-semibold text-gray-600">Pharmacology:</span> Identification of novel drug leads from natural sources.</p>
              <p>
                <span className="text-xl font-semibold text-gray-600">Food Science:</span> Understanding the health benefits and potential
                interactions associated with food components.</p>
              <p>
                <span className="text-xl font-semibold text-gray-600">Natural Product Discovery:</span> Exploration of bioactive compounds with
                therapeutic potential.
              </p>
            </div>
          </div>
          <div className="xl:ml-6 " >
            <h3 className="text-xl font-semibold font">Benefits for Researchers:</h3>
            <div className='flex flex-col gap-3 text-justify xl:ml-4 px-2 text-lg text-gray-800'>
              <p>
                <span className="text-xl font-semibold text-gray-600">Digitized Information:</span> FDP streamlines access to valuable data,
                facilitating efficient retrieval of information on specific secondary
                metabolites and their properties.
              </p>
              <p>
                <span className="text-xl font-semibold text-gray-600">Standardized Data:</span> The platform adheres to standardized formats,
                ensuring data quality and ease of comparison across different plant
                sources.</p>
              <p>
                <span className="text-xl font-semibold text-gray-600">Continuous Updates:</span> Regular platform updates guarantee access to the
                latest scientific findings on plant secondary metabolites.</p>
              <p>
                Overall, the FDP platform serves as a powerful tool for researchers
                seeking to explore the vast world of plant secondary metabolites and their
                potential applications in various scientific disciplines.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 xl:ml-10 xl:mr-10 border-t-4 border-indigo-200">
          <div >
            <h1 className="text-3xl font-semibold font">DISCLAIMER</h1>
          </div>
          <div className='flex flex-col gap-3 text-justify xl:ml-4 px-2 text-lg text-gray-800'>
            <p>The main goal of this database is to compile information from scientific literature on cereals.
              Should not used for any self diagnosis or medical treatment.
            </p>
            <p> This data is intended for research articles only & should not be used for self-diagnosis or medical treatment.
              Consulting a qualified healtcare professional is essential for any medical conditions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
