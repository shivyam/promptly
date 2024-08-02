'use client';
import React from 'react';
import { Box, Typography } from '@mui/material'; 
import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";
import {useState} from 'react';
import api from '../../api/axiosInstance';
import RegistrationResponse from '../components/registrationResponse/registrationResponse';

export default function Register() {
  const[username, setUsername] = useState<string>("");
  const[password, setPassword] = useState<string>("");
  const[firstName, setFirstName] = useState<string>("");
  const[lastName, setLastName] = useState<string>("");
  const[message, setMessage] = useState<string>("");
  

  const handleRegistration = async () => {
    const registrationData = {username, password, firstName, lastName};
    try {
      const response = await api.post('/api/register', registrationData);
      setMessage(response.data.message);
      console.log(response.data.message)

    } catch (error) {
      console.error('Error registration', error);
 
    }
  };
  return (
    <>
    <Box className="flex justify-center items-center h-screen">
      <Box className="w-full max-w-[400px] p-5 shadow-lg rounded-sm text-center"
      >
        <Typography variant="h4" className="font-bold mb-8">
          register for an account today :)
        </Typography>
        <Box className="flex flex-col gap-6">
            <Input value={firstName} onChange={(e) => setFirstName(e.target.value)}  type="text" label="first name" placeholder="please enter your first name" fullWidth />
            <Input value={lastName} onChange={(e) => setLastName(e.target.value)}  type="text" label="last name" placeholder="please enter your last name" fullWidth />  
            <Input value={username} onChange={(e) => setUsername(e.target.value)} type="text" label="username" placeholder="please enter a username" fullWidth />
            <Input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" label="password" placeholder="please enter a password" fullWidth />
            <Button color="secondary" onPress={handleRegistration} >create account</Button>
        </Box>
      </Box>
    </Box>
    
    <RegistrationResponse responseMessage={message} />
    </>
  );
}
