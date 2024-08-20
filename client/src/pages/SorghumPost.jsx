import { useState, useEffect } from "react";
import SorghumImage from "../Image/sorghum.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function SorghumPost() {
    const [sorghums, setSorghum] = useState([]);
    const [active, setActive] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = active * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = sorghums.slice(firstIndex, lastIndex);
    const npage = Math.ceil(sorghums.length / recordsPerPage)
    const numCol = firstIndex + 1;
    const numColPage = lastIndex;
    const numbers = [...Array(npage + 1).keys()].slice(1)
    const next = () => {
        if (active === npage) return;

        setActive(active + 1);
    };
    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };
    useEffect(() => {
        fetch("http://localhost:5000/api/sorghum/").then((result) => {
            result.json().then((resp) => {
                setSorghum(resp);
            });
        });
    }, []);

    return (
        <>
            <div className="grid grid-rows-1 pt-20 md:grid-cols-2">
                <div className="xl:mt-16 mt-12 xl:ml-40 sm:ml-10 ">
                    <h5 className="text-2xl font-bold">Sorghum</h5>
                    <h3 className="text-1xl font-bold">Classification (APG 2016)</h3>
                    <div className="">

                        <div>
                            <span className="relative inline-flex items-center gap-3 px-2 rounded ">
                                <span className="ml-2 text-lg font-bold text-gray-900 hover:text-gray-900">
                                    Clade:
                                </span>
                                <span className="pl-4">Angiospermae</span>
                            </span>
                        </div>
                        <div>
                            <span className="relative inline-flex items-center gap-3 px-2 rounded ">
                                <span className="ml-2 text-lg font-bold text-gray-900 hover:text-gray-900">
                                    Clade:
                                </span>
                                <span className="pl-4">Monocotyledonae</span>
                            </span>
                        </div>
                        <div>
                            <span className="relative inline-flex items-center gap-3 px-2 rounded ">
                                <span className="ml-2 text-lg font-bold text-gray-900 hover:text-gray-900">
                                    Order:
                                </span>
                                <span className="pl-3">Poales</span>
                            </span>
                        </div>
                        <div>
                            <span className="relative inline-flex items-center gap-3 px-2 rounded ">
                                <span className="ml-2 text-lg font-bold text-gray-900 hover:text-gray-900">
                                    Family:
                                </span>
                                <span className="pl-2">Poaceae</span>
                            </span>
                        </div>
                        <div>
                            <span className="relative inline-flex items-center gap-3 px-2 rounded ">
                                <span className="ml-2 text-lg font-bold text-gray-900 hover:text-gray-900">
                                    Genus:
                                </span>
                                <span className="pl-2">Sorghum</span>

                            </span>
                        </div>
                        <div>
                            <span className="relative inline-flex items-center gap-3 px-2 rounded ">
                                <span className="ml-2 text-lg font-bold text-gray-900 hover:text-gray-900">
                                    Species:
                                </span>
                                <span className="italic">S. bicolor</span>

                            </span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img
                        className="xl:h-80 h-60 xl:pl-20 xl:w-[600px] xl:pr-20 ms-auto xl:pt-12 px-4 py-2 drop-shadow-2xl"
                        src={SorghumImage}
                        alt="home"
                    />
                </div>
            </div>
            <div>
                <div className="flex flex-col xl:mt-20 mt-8 xl:ml-20 xl:mr-20 h-auto">
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
                                                S.No
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Common Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                CID
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Common Name Metabolite
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 w-2 text-left text-sm font-semibold text-gray-900"
                                            >
                                                IUPAC Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Molecular Weight
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Molecular Formula
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Canonical Smiles
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                References
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Super Class
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Class
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {records.map((sorghum, i) => (
                                            <tr key={i}>
                                                <td className=" py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.sn}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 italic border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.name}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.commonName}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.cid}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.commonNameMetabolite}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 sm:pl-1">
                                                    {sorghum.IUPACNameMetabolite}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.molecularWeight}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.molecularFormula}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 sm:pl-1">
                                                    {sorghum.canonicalSmiles}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.references}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.superClass}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {sorghum.class}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <span className="font-medium">{sorghums.length}</span> results
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
            </div>
        </>
    );
}