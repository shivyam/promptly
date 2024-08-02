import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import api from '../../../api/axiosInstance';
import { useState} from "react";

interface DateEntryTypes{
  dateStr: string;
  username: string;
}
const DateEntries: React.FC<DateEntryTypes> = ({dateStr, username}) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const[entries, setEntries] = useState<{ date: string; entry: string; username: string }[]>([]);

    const handleDateEntries= async () => {
    try {
      const response = await api.get(`/api/allEntries/${dateStr}/${username}`);
      setEntries(response.data);

    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  const handleButtonClick = async() => {
    await handleDateEntries();
    onOpen();
    
  }

  return (
    <div className="flex flex-col gap-2">
      <Button onPress={handleButtonClick}>See selected date entries</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{dateStr}</ModalHeader>
              <ModalBody>
                {entries.length > 0 ? (
                  <ul>
                    {entries.map((entry, index) => (
                      <li key={index}>{index+1  + ".) " + entry.entry}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No entries found.</p>
                )}
              
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default DateEntries;