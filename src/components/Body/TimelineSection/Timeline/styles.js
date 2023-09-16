import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const TimelineWrapper = styled(Box)`
  width: 80%; 
  height: auto; 
  margin: 0 auto;
  max-width: 800px;
  position: relative;

  &&::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-top: 0px;

  && li:last-child {
    margin-bottom: 0px;
  }

  && li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-60px);
  }

  && li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(60px);
  }

  && li::after {
    content: '';
    position: absolute;
    height: 20px;
    width: 20px;
    background: #fff;
    border-radius: 20px;
    top: 0px;
  }

  && li:nth-child(odd)::after {
    transform: translate(50%, -50%);
    right: -20px;
  }

  && li:nth-child(even)::after {
    transform: translate(-50%, -50%);
    left: -20px;
  }
`;

export const ListItem = styled.li`
  width: 50%;
  position: relative;

  padding: 20px;
  background: #101010;
  color: #fff;
  border-radius: 10px;
  margin-bottom: 100px;
`;