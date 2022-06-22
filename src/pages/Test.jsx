import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";

function Test() {
  return (
    <div>
      <Typography variant="body1" component="h1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
        provident ipsam obcaecati libero laborum. Accusantium quia nihil hic
        temporibus officia debitis repudiandae, iste commodi excepturi
        consectetur quibusdam sint repellendus corrupti.
      </Typography>

      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="success">
  Success
</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default Test;
