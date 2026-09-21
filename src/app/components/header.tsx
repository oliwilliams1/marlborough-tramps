"use client"

import { usePathname } from "next/navigation";
import BookTrampModal from "./book_tramp_modal";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center h-[4rem] justify-between p-4 bg-gray-800 text-white">
      <p>logo</p>
      <div className="flex space-x-4">
        <a href="/" className={`hover:text-gray-200 ${pathname === '/' ? 'text-gray-100' : 'text-gray-300'}`}>Home</a>
        <a href="/tramps" className={`hover:text-gray-200 ${pathname === '/tramps' ? 'text-gray-100' : 'text-gray-300'}`}>Tramps</a>
        <a href="/advice" className={`hover:text-gray-200 ${pathname === '/advice' ? 'text-gray-100' : 'text-gray-300'}`}>Advice</a>
        <a href="/join" className={`hover:text-gray-200 ${pathname === '/join' ? 'text-gray-100' : 'text-gray-300'}`}>Join</a>
      </div>
      <BookTrampModal />
    </header>
  )
}