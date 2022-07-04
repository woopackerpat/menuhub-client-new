import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { usePin } from "../../contexts/PinContextProvider";
import { useRestaurant } from "../../contexts/RestaurantContextProvider";
import ButtonSave from "../common/ButtonSave";

function HeaderAllMenusPage({ restaurantId, menus }) {
  const { pin, savePinRes } = usePin();
  const { isLoading, setIsLoading } = useRestaurant();

  const profilePin = pin?.slice(0, 1).map(el => el.id);

  const name = menus[0]?.Restaurant.name;

  const pinId = profilePin[0];

  const handleSaveRestaurant = async () => {
    try {
      setIsLoading(true);
      await savePinRes({ pinId, restaurantId });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
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
            src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1095550.jpg&fm=jpg"
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
            <Typography variant="h5" fontWeight="bold">
              {name}
            </Typography>
          </Box>
        </Box>
        <ButtonSave loading={isLoading} onClick={handleSaveRestaurant} />
      </Box>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="error" />
      </Backdrop>
    </>
  );
}
export default HeaderAllMenusPage;
