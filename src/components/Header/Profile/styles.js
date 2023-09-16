import styled from '@emotion/styled'
import { Box } from '@mui/material';

export const ProfileWrapper = styled(Box)`
  display: flex;
  flex: 1;
  background: black;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ isMobile }) => isMobile ? 'column' : 'row'}
`;

export const TextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  color: #ffffff;
  padding: 1rem;
`;