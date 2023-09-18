import React from "react";
import TimelineSection from "./TimelineSection";
import { Box } from "@mui/material";
import ProjectSection from "./ProjectsSection";

const Body = () => {
  return (
    <Box>
      <TimelineSection />
      <ProjectSection />
    </Box>
  )
};

export default Body;