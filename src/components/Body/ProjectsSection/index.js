import { Box, Typography } from '@mui/material';
import React from 'react';
import { PROJECTS } from './data';
import ProjectItem from './ProjectItem';
import useIsMobile from '../../../hooks/useIsMobile';

const ProjectSection = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Box display="flex" color="#fff" alignItems="center" justifyContent="center" paddingTop="100px">
        <Typography variant='h4'>PROJECTS</Typography>
      </Box>
      <Box display="flex" flex="1" maxWidth="920px" alignItems="center" justifyContent="center" margin="0 auto" paddingTop="50px" paddingBottom="100px" padding="10px">
        <Box display={isMobile ? 'flex' : 'grid'} flexDirection="column" flex="1" gridTemplateColumns="repeat(3, minmax(0, 1fr))" gap="2rem">
          {PROJECTS.map((project) => <ProjectItem project={project} />)}
        </Box>
      </Box>
    </>
  )
};

export default ProjectSection;