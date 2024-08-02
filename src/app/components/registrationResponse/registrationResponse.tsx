import React, { useEffect , useState} from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Box } from '@mui/material';

const RegistrationResponse = ({ responseMessage }: { responseMessage: string }) => {
  const router = useRouter();
 

  useEffect(() => {
    console.log(responseMessage);
    if (responseMessage === "success" ) {
      router.push("/");
    }
  }, [responseMessage, router]);

  return (
    <div>
      {responseMessage === "success" ? (
        <p>Redirecting...</p>
       ) : (
        <center>
        <Box className="mx-auto my-[400px] mb-50px flex flex-col items-center">
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

export default RegistrationResponse;
