import { Box, Typography } from "@mui/material";

function AlbumCreated() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
      }}
    >
      <Typography fontWeight="bold" variant="h4">
        No created Pins yet
      </Typography>
    </Box>
  );
}

export default AlbumCreated;
