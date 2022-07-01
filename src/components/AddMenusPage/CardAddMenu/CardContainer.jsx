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
import { uploadImage } from "../../../services/uploadImage";

function CardAddMenus({
  idx,
  handleSave,
  menuDetails,
  restaurantName,
  handleUpdate,
  handleDelete,
  handleInsert,
}) {
  const { title: Title, description: Description, imageUrl } = menuDetails;

  // console.log(Restaurant.id, Restaurant.name, Title, Description, imageUrl);

  const ariaLabel = { "aria-label": "description" };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [cloudUrl, setCloudUrl] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setTitle(Title);
    setDescription(Description);
    setImage(imageUrl);
  }, [menuDetails]);

  useEffect(() => {
    if (!menuDetails?.id) {
      setIsEdit(true);
    }
  }, []);

  useEffect(() => {
    const run = async () => {
      if (image) {
        const url = await uploadImage(image);
        setCloudUrl(url);
      }
    };
    run();
  }, [image]);

  const handleClick = () => {
    if (isEdit && menuDetails?.id) {
      handleUpdate(menuDetails?.id, {
        title,
        imageUrl: cloudUrl,
        description,
        orderNumber: idx + 1,
      });
    } else if (isEdit && !menuDetails?.id) {
      handleSave({
        title,
        imageUrl: cloudUrl,
        description,
        orderNumber: idx + 1,
      });
    }
    setIsEdit((isEdit) => !isEdit);
  };

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
            <DropdownCardMenu
              handleDelete={handleDelete}
              menuId={menuDetails?.id}
              handleInsert={handleInsert}
              idx={idx}
            />
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
              {/* จัดการ handleSave ตรงนี้ */}
              <Button
                sx={{ fontWeight: "bold", height: "100%" }}
                variant={isEdit ? "contained" : "outlined"}
                onClick={() => handleClick()}
              >
                {isEdit ? "Save" : "Edit"}
              </Button>
            </ButtonGroup>
          </Box>
          <Grid container sx={{ pb: "20px" }}>
            <Grid item xs={5}>
              <AddImage
                handleImage={(e) => setImage(e.target.files[0])}
                idx={idx}
                image={image}
                setImage={setImage}
                cloudUrl={cloudUrl}
                setCloudUrl={setCloudUrl}
                isEdit={isEdit}
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
                      disabled={isEdit ? false : true}
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
                      disabled={isEdit ? false : true}
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
