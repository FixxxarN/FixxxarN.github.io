import React from 'react';
import { Box, Typography } from '@mui/material';
import { List, ListItem, TimelineWrapper } from './styles';
import { EXPERIENCE_DATA } from './data';
import useIsMobile from '../../../../hooks/useIsMobile';

const Timeline = () => {
  const isMobile = useIsMobile();

  return (
    <Box display="flex" flex={1} alignItems="center" justifyContent="center" bgcolor="#000" color="#fff">
      <TimelineWrapper isMobile={isMobile}>
        <List isMobile={isMobile}>
          {
            EXPERIENCE_DATA.map((experience) => (
              <ListItem key={experience.company} isMobile={isMobile}>
                <Box>
                  <h2>{experience.company}</h2>
                  <p>{experience.title}</p>
                  <p>{experience.text}</p>
                  <p>{experience.interval}</p>
                  <p>{experience.place}</p>
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