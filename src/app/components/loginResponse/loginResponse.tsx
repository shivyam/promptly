import React, { useEffect , useState} from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Box } from '@mui/material';

interface LoginResponseProps {
  responseMessage: string;
  username: string;
}

const LoginResponse: React.FC<LoginResponseProps> = ({responseMessage, username}) => {
  const router = useRouter();
 
  useEffect(() => {
    if (responseMessage === "found" ) {
      router.push(`/${username}`);
    }
  }, [responseMessage, router, username]);

  return (
    <div>
      {responseMessage === "found" ? (
        <p className="text-center">Redirecting...</p>
      ) : (
        <center>
        <Box className="mx-auto my-[400px] mt-10 mb-10 flex flex-col items-center" >
          <Link href="/register" passHref>
          <Button color="secondary" >
              back
          </Button>
          </Link>
        </Box>
        </center>
      )}
    </div>
  );
}

export default LoginResponse;
