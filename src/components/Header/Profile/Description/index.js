import React from 'react';
import { PROFILE_DATA } from '../data';
import { Typography } from '@mui/material';

const Description = () => {
  return (<Typography fontSize={20}>{PROFILE_DATA.descriptionText}</Typography>)
}

export default Description;