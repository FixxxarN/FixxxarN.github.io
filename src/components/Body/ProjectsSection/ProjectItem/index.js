import { Box, Link, Typography } from "@mui/material";
import React from "react";

const ProjectItem = ({ project }) => {
  const { image, title, description, link } = project;

  return (
    <Box display="flex" flexDirection="column" bgcolor="#323232" color="#fff" borderRadius="10px" overflow="hidden">
      <img src={image} alt={`${title}-img`} style={{ width: '100%' }}></img>
      <Box display="flex" flexDirection="column" gap="1rem" padding="1rem">
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Link href={link}>Link</Link>
      </Box>
    </Box>
  )
}

export default ProjectItem;