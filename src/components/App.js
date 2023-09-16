import { Box } from '@mui/material';
import Body from './Body';
import Header from './Header'

const App = () => {
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Header />
      <Body />
    </Box>
  );
}

export default App;
