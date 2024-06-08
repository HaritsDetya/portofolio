"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaHtml5} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";

export default function Tools() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="Tools" className="">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-400" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-secondary-light_gray px-4 font-semibold text-base leading-6 text-gray-700">
              Experience
            </span>
          </div>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <FaHtml5 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" size={100}/>
              <IoLogoCss3 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" size={100}/>
              <IoLogoJavascript className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" size={100}/>
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
