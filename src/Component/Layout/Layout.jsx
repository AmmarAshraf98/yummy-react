import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Category from "../Category/Category";

export default function Layout() {
  return (
    <div className='min-h-dvh bg-[#F4F2EE]'>
      <div className='px-4 md:px-2 mx-auto'>
        <div className='items-center sm:flex space-x-1'>
          <Sidebar />
          <div className='flex flex-col w-full '>
            <Category />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
