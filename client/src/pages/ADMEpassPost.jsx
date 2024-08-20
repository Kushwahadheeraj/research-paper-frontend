import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function ADMEpassPost() {
  const [adme, setADME] = useState([]);
  const [active, setActive] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = active * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = adme.slice(firstIndex, lastIndex);
  const npage = Math.ceil(adme.length / recordsPerPage)
  const numCol = firstIndex + 1;
  const numColPage = lastIndex;
  const next = () => {
      if (active === npage) return;

      setActive(active + 1);
  };
  const prev = () => {
      if (active === 1) return;

      setActive(active - 1);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/ADMEpass/").then((result) => {
      result.json().then((resp) => {
        setADME(resp);
      });
    });
  }, []);





  return (
    <>
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold ">ADME - favorable drug leads from cereal metabolites</h1>
      </div>

      <div>
        <div className="flex flex-col mt-20 xl:ml-20 xl:mr-20 h-auto">
          <div className="mx-2 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden sha ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="table-fixed border-collapse border border-slate-400">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        CID
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Compound Name
                      </th>
                      
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Formula
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        MW
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        #Heavy atoms
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        #Aromatic heavy atoms
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Fraction Csp3
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Rotatable bonds
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        #H-bond acceptors
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        #H-bond donors
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        MR
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        TPSA
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        iLOGP
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        xLOGP3
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        WLOGP
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        MLOGP
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Silicos-IT Log P
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Consensus Log P
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        ESOL Log S
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        ESOL Solubility (mg/ml)
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        ESOL Solubility (mol/l)
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        ESOL Class
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Ali Log S
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Ali Solubility (mg/ml)
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Ali Solubility (mol/l)
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Ali Class
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Silicos-IT LogSw
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Silicos-IT Solubility (mg/ml)
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Silicos-IT Solubility (mol/l)
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Silicos-IT Class
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        GI absorption
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        BBB permeant
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Pgp substrate
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        CYP1A2 inhibitor
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        CYP2C19 inhibitor
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        CYP2C9 inhibitor
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        CYP2D6 inhibitor
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        CYP3A4 inhibitor
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        log Kp
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Lipinski #violations
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Veber #violations
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Egan #violations"
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Bioavailability Score
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        PAINS #alerts
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Brenk #alerts
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Leadlikeness #violations
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                      >
                        Synthetic Accessibility
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {records.map((admePass, i) => (
                      <tr key={i}>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.cid}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.compoundName}
                        </td>
                        
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.formula}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.mW}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.heavyaton}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.aromaticHeavyAtoms}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.fractionCsp3}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.rotatablebonds}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.hbondacceptors}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.hbonddonors}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.mR}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.tPSA}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.iLOGP}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.xLOGP3}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.wLOGP}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.mLOGP}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.SilicosITLogP}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.ConsensusLogP}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.ESOLLogS}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.ESOLSolubilityMG}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.ESOLSolubilityMOL}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.ESOLClass}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.AliLogS}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.AliSolubilityMG}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.AliSolubilityMOL}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.AliClass}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.SilicosITLogSw}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.SilicosITSolubilityMG}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.SilicosITSolubilityMOL}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.SilicosITclass}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.GIabsorption}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.BBBpermeant}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.Pgpsubstrate}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.CYP1A2inhibitor}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.CYP2C19inhibitor}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.CYP2C9inhibitor}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.CYP2D6inhibitor}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.CYP3A4inhibitor}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.logKp}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.Lipinskiviolations}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.Veberviolations}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.Eganviolations}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.BioavailabilityScore}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.PAINSalerts}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.Brenkalerts}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.Leadlikenessviolations}
                        </td>
                        <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                          {admePass.SyntheticAccessibility}
                        </td>
                      </tr >
                    ))
                    }
                  </tbody >
                </table >
              </div >
            </div >
          </div >
        </div >
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              onClick={prev}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              onClick={next}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{numCol}</span> to <span className="font-medium">{numColPage}</span> of{' '}
                <span className="font-medium">{adme.length}</span> results
              </p>
            </div>
            <div>
              <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                <a
                  href="#"
                  onClick={prev}
                  disabled={active === 10}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                </a>

                <div color="gray" className="font-normal">
                  Page <strong className="text-gray-900">{active}</strong> of{" "}
                  <strong className="text-gray-900">{npage}</strong>
                </div>
                <a
                  href="#"
                  onClick={next}
                  disabled={active === 10}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div >


    </>
  );
}