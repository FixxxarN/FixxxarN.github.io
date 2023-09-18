import React from 'react';
import { Box, Typography } from '@mui/material';
import { List, ListItem, TimelineWrapper } from './styles';
import { EXPERIENCE_DATA } from './data';
import useIsMobile from '../../../../hooks/useIsMobile';

const Timeline = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Box display="flex" color="#fff" alignItems="center" justifyContent="center" paddingTop="100px">
        <Typography variant='h4'>EXPERIENCES</Typography>
      </Box>
      <Box display="flex" flex={1} alignItems="center" justifyContent="center" bgcolor="#000" color="#fff" paddingTop="50px">
        <TimelineWrapper isMobile={isMobile}>
          <List isMobile={isMobile}>
            {
              EXPERIENCE_DATA.map((experience) => (
                <ListItem key={experience.company} isMobile={isMobile}>
                  <Box display="flex" flexDirection="column" gap="1rem">
                    <Typography variant='h4'>{experience.company}</Typography>
                    <Typography>{experience.title}</Typography>
                    <Typography style={{ whiteSpace: 'pre-line' }}>{experience.text}</Typography>
                    <Typography>{experience.interval}</Typography>
                    <Typography>{experience.place}</Typography>
                  </Box>
                </ListItem>
              ))
            }
          </List>
        </TimelineWrapper>
      </Box>
    </>
  )
};

export default Timeline;