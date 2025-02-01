import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className='bg-[#fff] hidden w-[240px] sm:flex items-center flex-col gap-2 py-4 min-h-dvh'>
      <img src='../../../public/logo.png' className='w-full' alt='' />
      <div className='flex w-full flex-col space-y-2'>
        <NavLink
          className='text-center rounded-lg mx-4 py-2 hover:scale-105 transition-all duration-300 bg-[#F9FAFB] border-2 border-gray-300'
          to={"/"}
        >
          Meals
        </NavLink>
        <NavLink
          className='text-center rounded-lg mx-4 py-2 hover:scale-105 transition-all duration-300 bg-[#F9FAFB] border-2 border-gray-300'
          to={"ingrediant"}
        >
          Ingerediant
        </NavLink>
        <NavLink
          className='text-center rounded-lg mx-4 py-2 hover:scale-105 transition-all duration-300 bg-[#F9FAFB] border-2 border-gray-300'
          to={"area"}
        >
          Area
        </NavLink>
      </div>
    </aside>
  );
}
