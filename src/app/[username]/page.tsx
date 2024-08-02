"use client"
import React from "react";
import { Calendar } from "@nextui-org/react";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import {today, getLocalTimeZone} from "@internationalized/date";
import {useState} from "react";
import DateEntries from "../components/dateEntries/dateEntries";
import api from "../../api/axiosInstance";

const UserPage: React.FC<{ params: { username: string } }> = ({ params }) => {
  const { username } = params; 
  
  let [value, setValue] = useState(today(getLocalTimeZone()));
  let [entries, setEntries] = useState();
  return (
    <>
      <div className="text-center pt-12">
        <h1 className="text-6xl font-bold">
          promptly.
        </h1>
        <h6 className="text-xl font-semibold pt-2">
          hi there, {username}! 👋🏼
        </h6>
      </div>

        
      <Calendar
            aria-label="Date (No Selection)"
            value={value} 
            onChange={setValue}
            className="mt-16 scale-125 grid mx-auto md:scale-[2] md:mt-40"/>

      {value && <DateEntries dateStr={value.toString()} username={username} />}

        <div className="flex justify-center mt-10 mb-12 ">
          <Link href={`/logmood/${username}`} passHref>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </Link>
        </div>
    
    </>
  );
}
export default UserPage;