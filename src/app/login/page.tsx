"use client";
import React from 'react';
import { Box, Typography } from '@mui/material'; 
import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";
import Link from 'next/link';
import {useEffect, useState} from 'react';
import api from '../../api/axiosInstance';
import LoginResponse from '../components/loginResponse/loginResponse';
import { Message } from '@mui/icons-material';

export default function Login() {

  const[username, setUsername] = useState<string>("");
  const[password, setPassword] = useState<string>("");
  const[message, setMessage] = useState<string>("");
  




  const handleLogin = async () => {
    const loginData = {username, password};
    try {
      const response = await api.post('/api/login', loginData);
      setMessage(response.data.message);

    } catch (error) {
      console.error('Error logging in', error);
 
    }
  };


  return (
    <>
    <Box className="flex justify-center items-center mt-[175px]">
      <Box className="w-full max-w-[400px] p-5 shadow-sm rounded-full text-center"
      >
        <Typography variant="h4" className="font-bold mb-8">
          login to your account!
        </Typography>
        <div className="flex flex-col gap-6">
          <Input type="text" label="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="please enter your username" fullWidth />
          <Input type="password" label="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="please enter your password" fullWidth />
          <Button color="secondary" onPress={handleLogin}>login</Button>

        </div>

      </Box>
    </Box>

      <LoginResponse responseMessage={message} username={username} />
      
    </>
  );
}
