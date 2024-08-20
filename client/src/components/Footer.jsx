import { Footer } from "flowbite-react";
import {Link} from 'react-router-dom'
import "./Footer.css"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className=" footer text-gray-600 bg-gray-200 shadow-lg body-font p-2 mt-auto block inset-x-0 bottom-0">
      <div className="w-full">
        <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          <Link
            to="/"
            className="flex items-center order-first mb-0 font-medium text-gray-900 lg:order-none lg:w-3/5 title-font md:mb-0"
          >
            <span className="ml-2 text-3xl font-bold">
              <span className="text-cyan-500">Food Drugs & Pharmacology</span>
            </span>
          </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:mt-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Dr Sushil Kumar" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">skg1979@gmail.com</Footer.Link>
                <Footer.Link href="tel:9410602676">+91 9410602676</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Dr Gourav Choudhir" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">gouravchoudhary129@gmail.com</Footer.Link>
                <Footer.Link href="tel:9711657128">+91 9711657128</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Sakshi Sharma" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">sakshisharma78757@gmail.com</Footer.Link>
                <Footer.Link href="tel:9682315044">+91 9682315044</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="Food Drugs & Pharmacology" year={(new Date().getFullYear())} />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

