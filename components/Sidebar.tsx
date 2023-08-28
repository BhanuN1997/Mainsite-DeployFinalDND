"use client"
import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import PaymentPage from "./payments"; // Make sure to import your PaymentPage component correctly

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-12 min-h-[100%] text-2xl p-6 pt-8 ">
      <div className="flex justify-center items-center gap-3 font-bold">
        App Workflows
      </div>
      <div className="flex items-center gap-3 text-xl">
        <Image
          src={"/asset/Vectorworkflow.png"}
          alt="Playground image"
          height={20}
          width={20}
        />
        Create Workflow
      </div>
      <div className="flex items-center gap-3 text-xl">
        <Image
          src={"/asset/Vectormarketplace.png"}
          alt="marketplace image"
          height={30}
          width={20}
        />
        MarketPlace
      </div>
      <div className="flex items-center gap-3 text-xl">
        <Image
          src={"/asset/Vectorsavedtemplate.png"}
          alt="template image"
          height={20}
          width={20}
        />
         {/* <Link to='/savedtemplates'>Saved Templates</Link> */}
        
        Saved Templates
      </div>

      <div className="flex justify-center items-center gap-3 font-bold">
        AI Workflows
      </div>

    


    
      <div className="flex items-center gap-3 text-xl">
        <Image
          src={"/asset/Vectorworkflow.png"}
          alt="Playground image"
          height={20}
          width={20}
        />
        Create Worlflow
      </div>
      <div className="flex items-center gap-3 text-xl">
        <Image
          src={"/asset/Vectormarketplace.png"}
          alt="marketplace image"
          height={30}
          width={20}
        />
        MarketPlace
      </div>
      <div className="flex items-center gap-3 text-xl">
        <Image
          src={"/asset/Vectorsavedtemplate.png"}
          alt="template image"
          height={20}
          width={20}
        />
         {/* <Link to='/savedtemplates'>Saved Templates</Link> */}
        
        Saved Templates
      </div>

      <div className=" flex flex-col mt-auto gap-10 border-t  border--t-2 border-solid border-gray-300 bg-white pt-6">
      <div className="flex items-center gap-3 text-xl">
        <Image
          src={"/asset/Vectorprofile.png"}
          alt="template image"
          height={20}
          width={20}
        />
         {/* <Link to='/savedtemplates'>Saved Templates</Link> */}
        
        Profile
      </div>
      <div className="flex items-center gap-3 text-xl">
        <Image
          src={"/asset/Vectorsettings.png"}
          alt="template image"
          height={20}
          width={20}
        />
         {/* <Link to='/savedtemplates'>Saved Templates</Link> */}
        
        Settings
      </div >
        <Router>
        <div>
          <Link to ="/payment">
          <div className="flex items-center gap-3 text-xl">
        <Image
          src={"/asset/Vectorsavedtemplate.png"}
          alt="template image"
          height={20}
          width={20}
        />
         {/* <Link to='/savedtemplates'>Saved Templates</Link> */}
        
        Payment
      </div>
          </Link>
        </div>
        <Routes>
        <Route path="/payment" Component={PaymentPage} />
        </Routes>
        </Router>
      </div>

      
    </aside>
  );
};

export default Sidebar;
