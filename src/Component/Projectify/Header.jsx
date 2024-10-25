import { useContext } from "react";
import MessageSvg from "../../SvgJsx/MessageSvg";
import NotificationSvg from "../../SvgJsx/NotificationSvg";
import { AddTaskContex } from "../../context/contex";

export default function Header() {
  const { handelSearch } = useContext(AddTaskContex);
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <button className="lg:hidden">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div className="mx-4 flex-1">
        <input
          type="text"
          placeholder="Search here"
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
          onChange={handelSearch}
        />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          <NotificationSvg />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative mr-4">
          <MessageSvg />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
}
