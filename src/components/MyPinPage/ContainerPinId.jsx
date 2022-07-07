import { useEffect } from "react";
import { Masonry } from "@mui/lab";
import { Box, IconButton, Link, Typography } from "@mui/material";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import { usePin } from "../../contexts/PinContextProvider";
import CartItemsPinId from "../common/cartItems/CartItemsPinId";
import { useNavigate } from "react-router-dom";

function ContainerPinId({ id }) {
  const { pin, pinById, fetchPinById } = usePin();

  const navigate = useNavigate();

  useEffect(() => {
    fetchPinById(id);
  }, [pin]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold" sx={{ m: 2 }}>
        {pinById.name}
      </Typography>
      {pinById.Restaurants?.length !== 0 ? (
        <Masonry
          columns={{ xs: 2, sm: 4, md: 4, lg: 5, xl: 7, xxl: 8 }}
          spacing={2}
        >
          {pinById.Restaurants?.map(items => (
            <CartItemsPinId
              key={items?.id}
              pinId={pinById?.id}
              Menus={items.Menus}
              items={items}
            />
          ))}
        </Masonry>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            gap: 4,
            cursor: "pointer",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            No saved restaurants yet
          </Typography>
          <Box
            sx={{
              bgcolor: "#efefef",
              borderRadius: "50px",
              padding: "8px 20px",
              textDecoration: "none",
              display: "flex",
              gap: 1,
              alignItems: "center",
              transition: "all .5s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            <Typography fontWeight="bold">View All Restaurants</Typography>
            <IconButton>
              <ArrowRightAltRoundedIcon color="primary" fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ContainerPinId;

const data = [
  {
    //   author: "test",
    download_url:
      "https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    //   author: "test",
    download_url:
      "https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];
