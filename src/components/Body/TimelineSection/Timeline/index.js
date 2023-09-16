import React from 'react';
import { Box, Typography } from '@mui/material';
import { List, ListItem, TimelineWrapper } from './styles';
import { EXPERIENCE_DATA } from './data';

const Timeline = () => {

  return (
    <Box display="flex" flex={1} alignItems="center" justifyContent="center" bgcolor="#000" color="#fff">
      <TimelineWrapper>
        <List>
          {
            EXPERIENCE_DATA.map((experience) => (
              <ListItem key={experience.company}>
                <Box>
                  <h2>{experience.company}</h2>
                  <p>{experience.interval}</p>
                </Box>
              </ListItem>
            ))
          }
        </List>
      </TimelineWrapper>
    </Box>
  )
};

export default Timeline;