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
        <p>Redirecting...</p>
      ) : (
        <center>
        <Box sx={{
          margin: 'auto 400px', marginTop: '50px', marginBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
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
