import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";


export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="min-h-screen flex">

      {/* Content */}
      <main className="flex-1">
        {/* Open button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden p-4">
          <RxHamburgerMenu />
        </button>
        <Outlet />
      </main>

      {/* Sidebar */}
      <aside className={` fixed md:static top-0 right-0 h-screen w-62 bg-black text-white transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}>
        {/* Close button */}
        <button onClick={() => setIsOpen(false)} className="md:hidden absolute top-4 left-4">
          <CgClose />
        </button>
        {/* Sidebar */}
          <Sidebar onClose={() => setIsOpen(false)} />
      </aside>
      
    </div>
    </>
  )
}

