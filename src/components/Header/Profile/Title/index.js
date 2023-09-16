import React from 'react';
import { PROFILE_DATA } from '../data';
import { Typography } from '@mui/material';

const Title = () => {
  return (<Typography fontWeight="bold" fontSize={36}>{PROFILE_DATA.titleText}</Typography>)
}

export default Title;