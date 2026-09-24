"use client"

import { usePathname } from "next/navigation";
import { Link } from "@heroui/react";
import { links } from "../utils/data";
import Image from "next/image";
import { GithubIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from "../utils/icons"

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-gray-800 pt-16 pb-10">
      <div className="flex flex-col sm:flex-row max-w-[1400px] w-full px-16 mx-auto">
        <div className="w-full sm:w-1/2 text-white flex flex-col justify-center items-start">
          <Image src="/logo.webp" alt="logo" loading="eager" width={192} height={192} className="mx-auto sm:mx-0 w-auto h-auto"/>

          <br />
        
          <p>
            Email:&nbsp;
            <Link className="text-white text-center sm:text-left">
              admin@marlboroughtramps.co.nz
              <Link.Icon />
            </Link>
          </p>
        </div>
        <div className="w-full sm:w-1/2 text-white text-center sm:text-right pt-4 flex flex-col justify-center">
          <div className="text-md space-y-4 pt-0 sm:pt-16">
            <div className="text-center sm:text-right text-gray-300">
              {links.map((link, index) => (
                <span key={link.href}>
                  <a
                    href={link.href}
                    className={`hover:text-gray-200 ${
                      pathname === link.href
                        ? "text-gray-100"
                        : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </a>

                  {index < links.length - 1 && (
                    <span>&nbsp;|&nbsp;</span>
                  )}
                </span>
              ))}
            </div>

            <div className="block sm:flex justify-end">
              <div className="min-w-48 mb-4 sm:mb-0">
                <p>Blenheim Office</p>
                <p>5 Stephenson St</p>
                <p>Blenheim</p>
                <p>Cell:&nbsp;
                  <Link href="tel:021 578 01" className="text-white">
                    021 578 01
                    <Link.Icon />
                  </Link>
                </p>
              </div>

              <div className="min-w-48">
                <p>Picton Office</p>
                <p>173 Waikawa Road</p>
                <p>Picton</p>
                <p>Cell:&nbsp;
                  <Link href="tel:021 573 6558" className="text-white">
                    021 573 6558
                    <Link.Icon />
                  </Link>
                </p>
              </div>
            </div>

            <p className="text-center sm:text-right">
              Find us on our socials
            </p>
          </div>
          <div className="flex justify-end space-x-2 mx-auto sm:mx-0 mt-2">
            {/* Bunch of icons for socials */}
            <a href="https://github.com/oliwilliams1" target="_blank">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://x.com" target="_blank">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <YoutubeIcon className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] w-full px-16 mx-auto text-white text-center sm:text-left">
        <p>&copy; Copyright 2026 name</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
}