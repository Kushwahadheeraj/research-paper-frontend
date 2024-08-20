import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function PharmacologicalCereal() {
    const [pharmacologicalCereals, setPharmacologicalCereal] = useState([]);
    const [active, setActive] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = active * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = pharmacologicalCereals.slice(firstIndex, lastIndex);
    const npage = Math.ceil(pharmacologicalCereals.length / recordsPerPage)
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
        fetch("http://localhost:5000/api/pharmacology3/").then((result) => {
            result.json().then((resp) => {
                setPharmacologicalCereal(resp);
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
                                                Plants
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-cancerous
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-bacterial
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Anti-fungal
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-inflammattory
                                            </th>

                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-oxidant
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-diabetic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Anti-protozons
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-allergic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-convulsant
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-coagulant
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Anti-ulcer
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-aging
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-obesity
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-anxiety
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Anti-infectious
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-depressive
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-osteoporosis
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-neoplastic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Anti-algal
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-gastritic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-spasmodic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-migraine
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Anti-psychotic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-adipogenic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-estrogenic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-insecticide
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Anti-hypertensive
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-amyloidogenic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-10 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-arthritic
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-platelet aggregating
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pr-3 text-sm font-semibold text-left text-gray-900 pi-6"
                                            >
                                                Anti-sickling
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 border-collapse border border-slate-400 pi-6 pr-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Anti-melanogenesis
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {records.map((pharmacologicalCereal, i) => (
                                            <tr key={i}>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-10"
                                                >
                                                    {pharmacologicalCereal.Plants}
                                                </td>

                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-10"
                                                >
                                                    {pharmacologicalCereal.Anticancerous}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antibacterial}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antifungal}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiinflammattory}
                                                </td>

                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-10"
                                                >
                                                    {pharmacologicalCereal.Antioxidant}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antidiabetic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiprotozons}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiallergic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-10"
                                                >
                                                    {pharmacologicalCereal.Anticonvulsant}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Anticoagulant}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiulcer}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiaging}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-10"
                                                >
                                                    {pharmacologicalCereal.Antiobesity}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antianxiety}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiinfectious}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antidepressive}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-10"
                                                >
                                                    {pharmacologicalCereal.Antiosteoporosis}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antineoplastic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antialgal}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antigastritic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-10"
                                                >
                                                    {pharmacologicalCereal.Antispasmodic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antimigraine}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antipsychotic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiadipogenic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-10"
                                                >
                                                    {pharmacologicalCereal.Antiestrogenic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiinsecticide}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antihypertensive}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiamyloidogenic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-10"
                                                >
                                                    {pharmacologicalCereal.Antiarthritic}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antiplateletaggregating}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antisickling}
                                                </td>
                                                <td
                                                    className="py-4 pl-4 pr-3 border-collapse border border-slate-300 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-1"
                                                >
                                                    {pharmacologicalCereal.Antimelanogenesis}
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
                                <span className="font-medium">{pharmacologicalCereals.length}</span> results
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