import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Input,
  MenuItem,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddImage from "./AddImage";
import CartUpload from "./CartUpload";
import DropdownCardMenu from "./DropdownCardMenu";

function CardAddMenus({  idx, setInput }) {
  const data = [
    { id: 1, name: "Rakthai" },
    { id: 2, name: "McDonald" },
    { id: 3, name: "Seafood" },
  ];

  const ariaLabel = { "aria-label": "description" };
  const [restaurant, setRestaurant] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);



  // const handleTitle = (e) => {
  //   const clone = [...input];
  //   clone[idx].title = e.target.value;
  //   console.log(idx);
  //   setInput(clone);
  // };

  // const handleDescription = (e) => {
  //   const clone = [...input];
  //   clone[idx].description = e.target.value;
  //   console.log(idx);
  //   setInput(clone);
  // };

  // const handleImage = (e) => {
  //   const clone = [...input];
  //   clone[idx].img = e.target.files[0];
  //   console.log(idx);
  //   setInput(clone);
  // };

  return (
    <>
      <Paper elevation={2} sx={{ width: "880px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            px: 7,
            py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <DropdownCardMenu />
            <ButtonGroup
              variant="contained"
              color="error"
              aria-label="outlined primary button group"
              sx={{ boxShadow: "none", display: "flex", alignItems: "center" }}
            >
              <TextField
                select
                value = {restaurant.name}
                sx={{ width: "250px", mr: "-70px" }}
                onChange={(e) => setRestaurant(e.target.value)}
              >
                {data.map((item) => (
                  <MenuItem value={item} name="test">
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
              <Button sx={{ fontWeight: "bold", height: "100%" }}>Save</Button>
            </ButtonGroup>
          </Box>
          <Grid container sx={{ pb: "20px" }}>
            <Grid item xs={5}>
              <AddImage
                handleImage={(e) => setImage(e.target.files[0])}
                idx={idx}
                
                image={image}
                setImage = {setImage}
              />
            </Grid>
            {/* ปรับช่องขวา */}
            <Grid
              item
              xs={7}
              sx={{
                p: 2,
                cursor: "pointer",
                mt: "auto",
              }}
            >
              <Box
                sx={{
                  borderRadius: "16px",
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <Input
                      placeholder="Add your menu"
                      inputProps={ariaLabel}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      sx={{
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#121212",
                      }}
                      fullWidth
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Avatar />
                    <Typography sx={{ fontWeight: "600" }}>
                      Restaurant's Name
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      fullWidth
                      label="description"
                      id="fullWidth"
                      multiline={true}
                      rows={9}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default CardAddMenus;
