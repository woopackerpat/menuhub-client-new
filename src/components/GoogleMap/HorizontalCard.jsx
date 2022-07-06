import {
  Button,
  Chip,
  Fab,
  Grid,
  Menu,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import useStyles from "./styles";
import { useMap } from "../../contexts/MapContextProvider";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";

function HorizontalCard({ place, selected, refProp, markId }) {
  const classes = useStyles();

  // console.log(place)

  const { setChildClicked, setListClicked, isLoading } = useMap();

  const navigate = useNavigate();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleMouseOver = () => {
    setChildClicked(null);
    setListClicked(markId);
  };

  const handleMouseOut = () => {
    setListClicked(null);
  };

  const shortMenus = place.Menus.slice(0, 3);

  const handleNavigate = (e) => {
    e.stopPropagation();
    navigate(`/search/?search=${place.name}`);
  };

  return (
    <a
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOut()}
      className={classes.pointer}
    >
      <Grid container sx={{ height: { xs: "100%", lg: "200px" } }}>
        <Grid item xs={12} lg={5}>
          <Box
            sx={{ borderRadius: "24px", overflow: "hidden", height: "100%" }}
          >
            {isLoading ? (
              <Skeleton animation="wave" variant="rectangular">
                <img
                  src={
                    place.Menus[0]?.imageUrl ||
                    "https://img.freepik.com/free-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
              </Skeleton>
            ) : (
              <Box
                sx={{
                  height: {xs: "350px",lg:"200px"},
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={
                    place.Menus[0]?.imageUrl ||
                    "https://img.freepik.com/free-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                  className="image-crop"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box sx={{ px: "20px", py: "15px" }}>
            <Grid container>
              <Grid item xs={11}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {isLoading ? (
                    <Skeleton width="50%" variant="text" animation="wave" />
                  ) : (
                    place.name || "Restaurant ABCD"
                  )}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Box onClick={handleNavigate} sx={{ mt: "-10px" }}>
                  <Fab size="small" color="white" className="eat-button">
                    <FastfoodIcon />
                  </Fab>
                </Box>
              </Grid>
            </Grid>
            <Grid container sx={{ mb: "0.5rem" }}>
              <Grid item xs={2}>
                {isLoading ? (
                  <Skeleton
                    variant="circular"
                    width="35px"
                    height="35px"
                    animation="wave"
                  />
                ) : selected ? (
                  <RestaurantIcon
                    className="mark-clicked"
                    fontSize="large"
                  ></RestaurantIcon>
                ) : (
                  <RoomIcon color="error" fontSize="large" />
                )}
              </Grid>
              <Grid
                item
                xs={10}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  variant="caption"
                  sx={{ lineHeight: 1.5, color: "#626262" }}
                >
                  {isLoading ? (
                    <>
                      <Skeleton width="230px" variant="text" animation="wave" />
                      <Skeleton width="190px" variant="text" animation="wave" />
                    </>
                  ) : (
                    place.address.slice(0, 65) ||
                    "Mint tower 719 Banthadthong road Wangmai Pathumwan Bangkok 10330"
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Stack direction="row" spacing={1} sx={{ mb: "8px" }}>
              {isLoading ? (
                <>
                  <Skeleton animation="wave">
                    <Chip
                      icon={<PhoneIcon />}
                      label={"Phone"}
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
                  </Skeleton>
                  <Skeleton animation="wave">
                    <Chip
                      icon={<PhoneIcon />}
                      label={"Line"}
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
                  </Skeleton>
                  <Skeleton animation="wave">
                    <Chip
                      icon={<PhoneIcon />}
                      label={"Official"}
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
                  </Skeleton>
                </>
              ) : (
                <>
                  <Chip
                    icon={<PhoneIcon />}
                    label={place.number || "Phone"}
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                  <Chip
                    icon={<MessageIcon />}
                    label={place.lineId || "Line"}
                    color="success"
                    size="small"
                    variant="outlined"
                    // style = {{backgroundColor: "#44b34f"}}
                  />

                  {place.isOfficial && (
                    <Chip
                      label={place.isOfficial && "Offical"}
                      color="error"
                      size="small"
                      variant="outlined"
                    />
                  )}
                </>
              )}
            </Stack>
            {Boolean(Object.keys(shortMenus).length) && (
              <Stack direction="row" spacing={1}>
                {isLoading ? (
                  <>
                    <Skeleton animation="wave">
                      <Chip
                        label="aaaaaaaaa"
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Skeleton>
                    <Skeleton animation="wave">
                      <Chip
                        label="aaaaaaaaa"
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Skeleton>
                    <Skeleton animation="wave">
                      <Chip
                        label="aaaaaaaaa"
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Skeleton>
                  </>
                ) : (
                  shortMenus.map((item, idx) =>
                    // console.log(item)
                    item?.title ? (
                      <Chip
                        key={idx}
                        label={
                          item.title.length> 13
                            ? item.title.slice(0, 13) + "..."
                            : item.title
                        }
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    ) : (
                      ""
                    )
                  )
                )}
              </Stack>
            )}
          </Box>
        </Grid>
      </Grid>
    </a>
  );
}

export default HorizontalCard;
