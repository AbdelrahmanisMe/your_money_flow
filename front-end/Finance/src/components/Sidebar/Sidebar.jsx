
import { FaArrowTrendDown, FaArrowTrendUp, FaRegFolderClosed } from "react-icons/fa6";
import { MdOutlineDashboard, MdOutlineSavings } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoFolderOutline, IoSettingsOutline } from "react-icons/io5";
import { FiBarChart2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";


export default function Sidebar({ onClose }) {

    const links = [
        { to: "/", icon: <MdOutlineDashboard />, label: "لوحة التحكم" },
        { to: "/Income", icon: <FaArrowTrendUp />, label: "الإيرادات" },
        { to: "/expenses", icon: <FaArrowTrendDown />, label: "المصروفات" },
        { to: "/accounts", icon: <BsBank2 />, label: "الحسابات" },
        { to: "/cash", icon: <FaMoneyBillAlt />, label: "النقد" },
        { to: "/debts", icon: <IoFolderOutline />, label: "الديون" },
        { to: "/SavingsGoals", icon: <MdOutlineSavings />, label: "أهداف الادخار" },
        { to: "/reports", icon: <FiBarChart2 />, label: "التقارير" },
        { to: "/settings", icon: <IoSettingsOutline />, label: "الإعدادات" },
    ];

  return (
    <div dir="rtl" className="p-6 py-9 h-screen flex flex-col justify-between">

        <div>
            {/* logo */}
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-800 p-2 rounded-xl">
                    <FaRegFolderClosed />
                </div>
                <h2>Money Tracker </h2>
            </div>

            {/* Links */}
            <ul className="space-y-1.5">
                {links.map((link , index) => (
                    <li key={index}>
                        <NavLink onClick={onClose} to={link.to} className={({ isActive }) =>`p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}>
                            {link.icon}{link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
        
        <div>
            <p>الاسم </p>
            <button >تسجيل الخروج </button>
        </div>

    </div>
  )
}

{/* <ul className="space-y-1.5">
  <li><NavLink onClick={onClose} to="/" className={({ isActive }) => `p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}><MdOutlineDashboard />لوحة التحكم</NavLink></li>
  <li><NavLink onClick={onClose} to={"/Income"} className={({ isActive }) => `p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}><FaArrowTrendUp />الايرادات</NavLink></li>
  <li><NavLink onClick={onClose} to={"/expenses"} className={({ isActive }) => `p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}><FaArrowTrendDown />المصروفات</NavLink></li>
  <li><NavLink onClick={onClose} to={"/accounts"} className={({ isActive }) => `p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}><BsBank2 />الحسابات</NavLink></li>
  <li><NavLink onClick={onClose} to={"/cash"} className={({ isActive }) => `p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}><FaMoneyBillAlt />النقد</NavLink></li>
  <li><NavLink onClick={onClose} to={"/debts"} className={({ isActive }) => `p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}><IoFolderOutline />الديون</NavLink></li>
  <li><NavLink onClick={onClose} to={"/SavingsGoals"} className={({ isActive }) => `p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}><MdOutlineSavings />اهداف الادخار</NavLink></li>
  <li><NavLink onClick={onClose} to={"/reports"} className={({ isActive }) => `p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}><FiBarChart2 />التقارير</NavLink></li>
  <li><NavLink onClick={onClose} to={"/settings"} className={({ isActive }) => `p-2 flex items-center gap-2 rounded-md ${ isActive ? "text-white bg-gray-800" : "text-taupe-400 hover:text-gray-200 hover:bg-gray-900"}`}><IoSettingsOutline />الاعدادات</NavLink></li>
</ul> */}
