import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Category from "../Category/Category";

export default function Layout() {
  const [query, setquery] = useState("");

  function selectCAtegory(c) {
    setquery(c);
  }

  return (
    <div className='min-h-dvh bg-[#F4F2EE]'>
      <div className='px-4 md:px-2 mx-auto'>
        <div className='sm:flex space-x-1'>
          <Sidebar />
          <div className='flex flex-col w-full space-y-6 '>
            <Category onHandleCategory={selectCAtegory} />
            <Outlet context={query} />
          </div>
        </div>
      </div>
    </div>
  );
}
