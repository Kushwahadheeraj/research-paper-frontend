import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function PharmacologicalBiological() {
    const [pharmacologicalBiologicals, setPharmacologicalBiological] = useState([]);
    const [active, setActive] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = active * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = pharmacologicalBiologicals.slice(firstIndex, lastIndex);
    const npage = Math.ceil(pharmacologicalBiologicals.length / recordsPerPage)
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
        fetch("http://localhost:5000/api/pharmacologyBiological/").then((result) => {
            result.json().then((resp) => {
                setPharmacologicalBiological(resp);
            });
        });
    }, []);
    return (
        <>
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
                                                S.No
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                CID
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Compound Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 w-1/2 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Pharmacology Activity
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {records.map((pharmacologicalBiological, i) => (
                                            <tr key={i}>
                                                <td className=" py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {pharmacologicalBiological.sn}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {pharmacologicalBiological.cid}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1">
                                                    {pharmacologicalBiological.compoundName}
                                                </td>
                                                <td className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 sm:pl-1">
                                                    {pharmacologicalBiological.biologicalActivity}
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
                                <span className="font-medium">{pharmacologicalBiologicals.length}</span> results
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