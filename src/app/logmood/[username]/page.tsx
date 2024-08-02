'use client';
import React from 'react';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import SickOutlinedIcon from '@mui/icons-material/SickOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from 'next/link';
import api from '../../../api/axiosInstance';

import {useState} from 'react';

const LogMood: React.FC<{ params: { username: string } }> = ({ params }) => {
  const { username } = params; // Access dynamic route parameter

  
  const[journalEntry, setJournalEntry] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [wasKind, setWasKind] = useState<string | null>(null);

  const handleMoodClick = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleKindClick = (kindness: string) => {
    setWasKind(kindness);
  };

  var today = new Date();

  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  const handleEntry = async () => {
    const entryData = {today, journalEntry,username};
    try {
      const response = await api.post(`/api/entry/${username}`, entryData);
      

    } catch (error) {
      console.error('Error logging in', error);
 
    }
  };


  return (
    
    <div className="flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-10">
          <Link href={`/${username}`}>
            <Button color="secondary">
              back
            </Button>
          </Link>

          <h4 className="text-3xl font-bold">
            how are you feeling today?
          </h4>
        </div>
        
        <div className="flex justify-around mb-10">
          <button onClick={() => handleMoodClick('very_satisfied')} className={`${selectedMood === 'very_satisfied' ? 'bg-slate-300 rounded-full' : ''}`}>
            <SentimentVerySatisfiedOutlinedIcon className="text-7xl" />
          </button>
          <button onClick={() => handleMoodClick('satisfied')} className={`${selectedMood === 'satisfied' ? 'bg-slate-300 rounded-full' : ''}`}>
            <SentimentSatisfiedOutlinedIcon className="text-7xl" />
          </button>
          <button onClick={() => handleMoodClick('neutral')} className={`${selectedMood === 'neutral' ? 'bg-slate-300 rounded-full' : ''}`}>
            <SentimentNeutralOutlinedIcon className="text-7xl" />
          </button>
          <button onClick={() => handleMoodClick('dissatisfied')} className={`${selectedMood === 'dissatisfied' ? 'bg-slate-300 rounded-full' : ''}`}>
            <SentimentDissatisfiedOutlinedIcon className="text-7xl" />
          </button>
          <button onClick={() => handleMoodClick('sick')} className={`${selectedMood === 'sick' ? 'bg-slate-300 rounded-full' : ''}`}>
            <SickOutlinedIcon className="text-7xl" />
          </button>
        </div>

        <h4 className="text-3xl font-bold mb-10">
          were you kind to yourself today?
        </h4>
        
        <div className="flex justify-around mb-10">
          <button onClick={() => handleKindClick('yes')} className={`${wasKind === 'yes' ? 'bg-slate-300 rounded-lg' : ''}`}>
            <ThumbUpOffAltOutlinedIcon className="text-7xl" />
          </button>
          <button onClick={() => handleKindClick('no')} className={`${wasKind === 'no' ? 'bg-slate-300 rounded-lg' : ''}`}>
            <ThumbDownOffAltOutlinedIcon className="text-7xl" />
          </button>
        </div>

        <h4 className="text-3xl font-bold mb-10">
          what made you feel this way today?
        </h4>
        
        <div className="mb-10">
          <CheckboxGroup className="space-y-2">
            <Checkbox value="family">family</Checkbox>
            <Checkbox value="work">work</Checkbox>
            <Checkbox value="school">school</Checkbox>
            <Checkbox value="friends">friends</Checkbox>
            <Checkbox value="activities">activities</Checkbox>
            <Checkbox value="no reason">no reason, I just feel like this</Checkbox>
          </CheckboxGroup>
        </div>

        <Textarea 
          label="let's journal! ✍🏼"
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="start an entry"
          size="lg"
          className="mb-12"
        />
        
        <Link href={`/${username}`}>
          <Button onPress={handleEntry} color="primary" className="mt-6">
            Submit
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LogMood;
