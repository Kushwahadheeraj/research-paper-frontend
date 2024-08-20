import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen)
  }
  return (
    <nav
      className=" mb-10 bg-gray-100 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center order-first mb-0 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font md:mb-0"
        >
          <span className="ml-3 text-3xl font-bold">
            <span className="text-cyan-500">Food Drugs & Pharmacology</span>
          </span>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        </div>
        <ul className="hidden md:flex space-x-4 flex flex-wrap items-center text-base lg:w-4/5 lg:justify-end md:ml-auto">
          <li><Link to="/"><span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
              Home
            </span>
          </span></Link></li>
          <li className="menu">
            <Link><span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
              <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                CMDb
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
            </Link>
            <div className="menu-bar-1 hidden bg-gray-100">
              <ul>

                <li><Link to="/adme">
                  <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                    <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                      ADME
                    </span>
                  </span></Link></li>
                <li><Link to="/statisties">
                  <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                    <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                      Statistics
                    </span>
                  </span></Link></li>
                <li><Link to="/CMdb/pharmcological ">
                  <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                    <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                      Pharmacological Activities
                    </span>
                  </span></Link></li>
                <li className="hover-me">

                  <Link><span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                    <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                      Cereals
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ml-24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                  </Link>
                  <div className="menu-bar-2 hidden bg-gray-100">
                    <ul>
                      <li><Link to="/Cereals/wheat">
                        <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                          <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                            Wheat
                          </span>
                        </span>
                      </Link></li>
                      <li><Link to="/Cereals/rice">
                        <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                          <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                            Rice
                          </span>
                        </span></Link></li>
                      <li><Link to="/Cereals/sorghum">
                        <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                          <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                            Sorghum
                          </span>
                        </span></Link></li>
                      <li><Link to="/Cereals/ragi">
                        <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                          <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                            Ragi
                          </span>
                        </span></Link></li>
                      <li><Link to="/Cereals/barley">
                        <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                          <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                            Barley
                          </span>
                        </span></Link></li>
                      <li><Link to="/Cereals/maize">
                        <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                          <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                            Maize
                          </span>
                        </span></Link></li>

                      <li><Link to="/Cereals/bajra">
                        <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                          <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                            Bajra
                          </span>
                        </span></Link></li>
                    </ul>
                  </div>

                </li>
                <li><Link to="/CMdb/author">
                  <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                    <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                      Author
                    </span>
                  </span></Link></li>

              </ul>
            </div>

          </li>
          <li><Link to="/acknowledgements" className="relative inline-flex items-center mr-3">
            <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
              <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                Acknowledgements
              </span>
            </span>
          </Link></li>
          <li><Link to="/help"><span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
              Help
            </span>
          </span></Link></li>
        </ul>
      </div>

      {isMobileOpen ? (
        // <ul className="">
        <ul className="flex-col md:hidden">
          <li><Link to="/"><span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
              Home
            </span>
          </span></Link></li>
          <li className="menu-mobile">
            <div>
              <Link  >
                <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                  <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                    CMDb
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </Link>
              <div className="menu-bar-1 hidden bg-gray-100">
                <ul>

                  <li><Link to="/adme">
                    <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                      <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                        ADME
                      </span>
                    </span></Link></li>
                  <li><Link to="/statisties">
                    <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                      <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                        Statistics
                      </span>
                    </span></Link></li>
                  <li><Link to="/CMdb/pharmcological ">
                    <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                      <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                        Pharmacological Activities
                      </span>
                    </span></Link></li>
                  <li className="hover-mobile">

                    <Link><span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                      <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                        Cereals
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    </Link>
                    <div className="menu-bar-2 hidden bg-gray-100">
                      <ul>
                        <li><Link to="/Cereals/wheat">
                          <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                              Wheat
                            </span>
                          </span>
                        </Link></li>
                        <li><Link to="/Cereals/rice">
                          <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                              Rice
                            </span>
                          </span></Link></li>
                        <li><Link to="/Cereals/sorghum">
                          <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                              Sorghum
                            </span>
                          </span></Link></li>
                        <li><Link to="/Cereals/ragi">
                          <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                              Ragi
                            </span>
                          </span></Link></li>
                        <li><Link to="/Cereals/barley">
                          <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                              Barley
                            </span>
                          </span></Link></li>
                        <li><Link to="/Cereals/maize">
                          <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                              Maize
                            </span>
                          </span></Link></li>

                        <li><Link to="/Cereals/bajra">
                          <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                              Bajra
                            </span>
                          </span></Link></li>
                      </ul>
                    </div>

                  </li>
                  <li><Link to="/CMdb/author">
                    <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
                      <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                        Author
                      </span>
                    </span></Link></li>
                </ul>
              </div>
            </div>
          </li>
          <li><Link to="/acknowledgements" className="relative inline-flex items-center mr-3">
            <span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
              <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900">
                Acknowledgements
              </span>
            </span>
          </Link></li>
          <li><Link to="/help"><span className="relative inline-flex items-center rounded px-2.5 py-1.5 font-medium">
            <span className="ml-1.5 text-base text-gray-600 hover:text-gray-900 transition duration-300 delay-150 hover:delay-300">
              Help
            </span>
          </span></Link></li>
        </ul>
      ) : null}
    </nav>
  )
}
