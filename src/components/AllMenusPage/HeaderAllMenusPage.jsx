import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { usePin } from "../../contexts/PinContextProvider";
import ButtonSaveProfile from "../common/ButtonSaveProfile";

function HeaderAllMenusPage({ restaurantId, menus }) {
  const [loading, setLoading] = useState(false);
  const { pin, savePinRes } = usePin();
  // const { isLoading, setIsLoading } = useRestaurant();

  console.log(menus);

  const profilePin = pin?.slice(0, 1).map(el => el.id);

  const name = menus[0]?.Restaurant.name;
  const imageUrl = menus[0]?.imageUrl;

  const pinId = profilePin[0];

  console.log(restaurantId);
  console.log(pinId);

  const handleSaveRestaurant = async () => {
    try {
      setLoading(true);
      await savePinRes({ pinId, restaurantId });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imageUrl || ""}
            alt="logo"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "60px",
              height: "60px",
              cursor: "pointer",
            }}
          />
          <Box
            sx={{
              padding: 1,
              color: "Black",
              "&:hover": {
                color: "#000000",
                backgroundColor: "#efefef",
              },
            }}
          >
            <Typography variant="h5" sx = {{fontWeight: 500}} className = "thai" >
              {name}
            </Typography>
          </Box>
        </Box>
        <ButtonSaveProfile
          loading={loading}
          onClick={handleSaveRestaurant}
          restaurantId={restaurantId}
          pinId={pinId}
        />
      </Box>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={loading}
      >
        <CircularProgress color="error" />
      </Backdrop>
    </>
  );
}
export default HeaderAllMenusPage;
