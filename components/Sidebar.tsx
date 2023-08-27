"use client"
import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import PaymentPage from "./payments"; // Make sure to import your PaymentPage component correctly

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-16 min-h-[100%] text-2xl p-6 text-gray-600 pt-8 bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
      <div className="flex items-center gap-3 font-bold">
        Workflow
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={"/asset/playground.png"}
          alt="Playground image"
          height={20}
          width={20}
        />
        PlayGround
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={"/asset/playground.png"}
          alt="marketplace image"
          height={30}
          width={20}
        />
        MarketPlace
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={"/asset/templates.png"}
          alt="template image"
          height={20}
          width={20}
        />
         {/* <Link to='/savedtemplates'>Saved Templates</Link> */}
        
        Saved Templates
      </div>

      <div className="flex items-center gap-3 font-bold">
        AI
      </div>

     <Router>
      <div>
        <Link to ="/payment">
          <button><strong>Payment</strong></button>
        </Link>
      </div>
      <Routes>
      <Route path="/payment" Component={PaymentPage} />
      </Routes>
      </Router>
    </aside>
  );
};

export default Sidebar;
