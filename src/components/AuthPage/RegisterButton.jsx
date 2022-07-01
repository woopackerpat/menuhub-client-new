import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function RegisterButton() {
  return (
    <Box sx={{ my: '10px' }}>
      <Button variant="contained" fullWidth size="medium" color="error">
        <Typography
          sx={{
            py: '8px',
            fontWeight: 'normal',
            textTransform: 'none',
          }}
          variant="h6"
        >
          Register
        </Typography>
      </Button>
    </Box>
  );
}

export default RegisterButton;
