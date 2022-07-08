import { Container } from '@mui/material';
import React from 'react';
import StepForm from './StepForm';

const Step6 = (props) => {
  return (
    <Container>
      <StepForm
        {...props}
        title='Personality Type'
        description={`This explains the way you see things and the way you would go about things. Which one of these best describes your personality type`}
        options={[
          `ISTJ: the inspector;punctual one that are loyal and sensible`,
          `INTJ: the architect ; brilliant brain are logical, systematic thinkers who are often fifty steps ahead of others`,
          `INTP:the logician; techie type are curious, intellectual, and logical`,
          `ENTJ:the commander; relentless type are born to lead`,
          `INFJ:the advocate; genius in a closet have a unique combination of humanitarian visions and pragmatic sensibilities`,
          `ENTP: the debater; eyes on the prize kind come up with ingenious, innovative ideas like no one else does, never shy away from being the devil’s advocate.`,
          `INFP:the mediator; free soul are quiet, sensitive peacekeepers`,
          `ENFJ:the protagonist; righteous spokesperson are most concerned with helping others, and are capable of connecting with anyone and everyone`,
          `ISFJ:the defender;humble soul that are are responsible, and care deeply about others’ feelings`,
          `ESTJ:the executive;are hardworking and pragmatic leading actions`,
          `ESFJ:the consul; popular kind that are loyal, personable doers`,
          `ISTP:the virtuoso; hacker are independent, pragmatic, and spontaneous.`,
          `ISFP:the adventurer; artist are introspective creatives who live in the here and now`,
          `ESTP:the entrepreneur; funny kind are free spirits who are on the constant lookout for the next adventure/ venture`,
          `ESFP:the entertainer; fancy kind always making sure everyone is having a good time`,
          `ENFP:the campaigner; careless talented kind see endless possibilities, and their enthusiasm for new ideas is compelling.`,
        ]}
      />
    </Container>
  );
};

export default Step6;
