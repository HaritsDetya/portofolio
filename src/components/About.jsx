"use client";

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function About() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div id='About' className="">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-400" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-secondary-light_gray px-4 font-semibold text-base leading-6 text-gray-700">About</span>
                    </div>
                </div>
                {/* <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div> */}
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-txt-dark_green">
                    <div className="text-justify text-lg">
                        <p className="mb-4">Hi, I`m Harits, a passionate Frontend Developer with a keen eye for detail and a love for creating engaging, intuitive, and responsive web applications. With a background in Computer Science, I have honed my skills in HTML, CSS, JavaScript, and various modern frameworks like React and Vue.js.</p>
                        <p className="mb-4">My journey into frontend development began [X years] ago when I realized my enthusiasm for designing user-centric digital experiences. Over the years, I`ve had the opportunity to work on diverse projects, ranging from small business websites to large-scale web applications.</p>
                        <p className="mb-4">In addition to my technical skills, I am committed to continuous learning and staying updated with the latest industry trends and best practices. I enjoy collaborating with cross-functional teams to bring creative solutions to life and deliver exceptional user experiences.</p>
                        <p className="mb-4">When I`m not coding, you can find me exploring the outdoors, reading about the latest tech innovations, or experimenting with new recipes in the kitchen.</p>
                    </div>
                </div>
                {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
            </div>
        </div>
    )
}
