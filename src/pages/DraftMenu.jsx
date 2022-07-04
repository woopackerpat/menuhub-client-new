import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ContainerDraftMenuPage from "../components/DraftMenuPage/ContainerDraftMenu";
import { useRestaurant } from "../contexts/RestaurantContextProvider";

function DraftMenuPage() {
  const { setIsEditRestaurant } = useRestaurant();

  const { restaurantId } = useParams();

  if (restaurantId !== undefined) {
    setIsEditRestaurant(true);
  }

  return (
    <Box
    sx={{
      pt: "20px",
      px: {
        xs: "0",
        xl: "70px",
        lg: "40px",
        md: "40px",
        sm: "10px",
      },
    }}
    >
      <ContainerDraftMenuPage restaurantId={restaurantId} />;
    </Box>
  );
}
export default DraftMenuPage;
