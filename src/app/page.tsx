'use client';
import React from "react";
import { Calendar } from "@nextui-org/react";
import Link from 'next/link';
import { Button } from "@nextui-org/button";
import EditIcon from '@mui/icons-material/Edit';
import Fab from "@mui/material/Fab";

export default function App() {
  
  return (
    <>
      <div className="text-center pt-12">
        <h1 className="text-6xl font-bold">
          promptly.
        </h1>
        <h6 className="text-xl font-normal pt-2">
          hi there! 👋🏼
        </h6>
      </div>
      <div className="flex justify-center items-center gap-3 mt-5">
        <Link href="/login" passHref>
          <button className="px-4 py-2 bg-secondary text-white rounded-md">
            login
          </button>
        </Link>
        <Link href="/register" passHref>
          <button className="px-4 py-2 bg-secondary text-white rounded-md">
            register
          </button>
        </Link>
      </div>
        
      <Calendar className=" mt-16 scale-125 grid mx-auto md:scale-[2] md:mt-40"/>
        
    
    </>
  );
}
