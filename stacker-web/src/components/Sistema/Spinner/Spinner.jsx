import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import * as React from 'react';
import { usePromiseTracker } from "react-promise-tracker";

const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress &&
    <>
      <Backdrop
        sx={{ color: '#fff', justifyContent: 'center' }}
        open={true}
      >
        <Box >
          <CircularProgress color="error" />
        </Box>
      </Backdrop>
    </>
  );
}

export default Spinner;