import { usePathname } from "next/navigation";
import { Link } from "@heroui/react";
import { links } from "../utils/data"

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-gray-800 pt-16 pb-10">
      <div className="flex flex-col sm:flex-row max-w-[1200px] w-full px-16 mx-auto">
        <div className="w-full sm:w-1/2 text-white flex flex-col justify-center items-start">
          <div className="flex items-center mb-4 mx-auto sm:mx-0">
            <div className="w-24 h-24 bg-blue-500">
              [logo]
            </div>
            <h2 className="ml-4 text-2xl font-bold">name</h2>
          </div>

          <br />

          <div className="flex">
            <div className="min-w-48">
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
          
          <br />

          <p>
            Email:&nbsp;
            <Link className="text-white text-left sm:text-center">
              admin@marlboroughtramps.co.nz
              <Link.Icon />
            </Link>
          </p>

          <br />

          <div className="text-md mx-auto sm:mx-0 text-center sm:text-left">
            <p>&copy; Copyright 2026 name</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 text-white text-right pt-8 flex flex-col justify-center">
          <div className="text-md space-y-4">
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

            <p className="text-center sm:text-right">
              Find us on our socials
            </p>
          </div>
          <div className="h-[1px] bg-[rgb(180,170,180)] max-w-[9.5rem] ml-auto my-4"></div>
          <div className="flex justify-end space-x-2 mx-auto sm:mx-0">
            {/* Bunch of icons for socials 
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
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}