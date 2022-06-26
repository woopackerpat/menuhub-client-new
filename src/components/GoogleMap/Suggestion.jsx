import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import useStyles from './styles'

function Suggestion() {

    const classes = useStyles()

  const listRestaurant = [
    {
      id: 1,
      title: "McDonald",
    },
    {
      id: 2,
      title: "MK Suki",
    },
    {
      id: 3,
      title: "Pizza Company",
    },
    {
      id: 4,
      title: "KFC",
    },
    {
      id: 5,
      title: "Rak Thai",
    },
    {
      id: 6,
      title: "Teenoi Suki",
    },
    {
      id: 7,
      title: "LekYai Noodle",
    },
   
  ];
  const [list, setList] = useState(listRestaurant);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
      }}
    >
      {list.map((item) => (
        <Button
          key={item.id}
          sx={{
            padding: 2,
            backgroundColor: "#767676",
            color: "white",
            borderRadius: "36px",
            textTransform: "none",
            
            "&:hover": {
              color: "#000000",
              backgroundColor: "#efefef",
            },
          }}
          
        >
          <Typography sx = {{fontSize: "12px", fontWeight: 600, letterSpacing: 1}}>{item.title}</Typography>
        </Button>
      ))}
    </Box>
  );
}

export default Suggestion;
