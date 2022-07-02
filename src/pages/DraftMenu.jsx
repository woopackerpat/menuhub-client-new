import { useParams } from "react-router-dom";
import ContainerDraftMenuPage from "../components/DraftMenuPage/ContainerDraftMenu";
import { useRestaurant } from "../contexts/RestaurantContextProvider";

function DraftMenuPage() {
  const { setIsEditRestaurant } = useRestaurant();

  const { restaurantId } = useParams();

  if (restaurantId !== undefined) {
    setIsEditRestaurant(true);
  }

  return <ContainerDraftMenuPage restaurantId = {restaurantId}/>;
}
export default DraftMenuPage;
