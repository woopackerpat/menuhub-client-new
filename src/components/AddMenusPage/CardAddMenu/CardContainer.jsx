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
import { useEffect, useState } from "react";
import AddImage from "./AddImage";
import CartUpload from "./CartUpload";
import DropdownCardMenu from "./DropdownCardMenu";

function CardAddMenus({ idx, handleSave, menuDetails, restaurantName }) {
  const {
    
    title: Title,
    description: Description,
    imageUrl,
  } = menuDetails;

  console.log(restaurantName)

  // console.log(Restaurant.id, Restaurant.name, Title, Description, imageUrl);

  useEffect(() => {
    
    setTitle(Title);
    setDescription(Description);
    setImage(imageUrl);
  }, [menuDetails]);

  const ariaLabel = { "aria-label": "description" };
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // console.log({ title, description, image, orderNumber: idx });

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
              sx={{
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <TextField
                select
                value={restaurant}
                sx={{ width: "250px", mr: "-70px" }}
                onChange={(e) => setRestaurant(e.target.value)}
              >
                {data.map((item) => (
                  <MenuItem key={item.id} value={item} name="test">
                    {item.name}
                  </MenuItem>
                ))}
              </TextField> */}
              {/* จัดการ handleSave ตรงนี้ */}
              <Button
                sx={{ fontWeight: "bold", height: "100%" }}
                onClick={() =>
                  handleSave({
                    title,
                    imageUrl: image,
                    description,
                    orderNumber: idx + 1,
                  })
                }
              >
                Save
              </Button>
            </ButtonGroup>
          </Box>
          <Grid container sx={{ pb: "20px" }}>
            <Grid item xs={5}>
              {/* <AddImage
                handleImage={(e) => setImage(e.target.files[0])}
                idx={idx}
                image={image}
                setImage={setImage}
              /> */}
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
                      {restaurantName}
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
