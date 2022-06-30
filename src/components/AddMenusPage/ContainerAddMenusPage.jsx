import { Box, Button, Container } from "@mui/material";
import CardContainer from "./CardAddMenu/CardContainer";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { createMenu, getAllMenusOfRestaurant } from "../../api/menu";
import { useParams } from "react-router-dom";

function ContainerAddMenusPage() {
  const [input, setInput] = useState([{}]);

  const { restaurantId } = useParams();

  useEffect(() => {
    const run = async () => {
      const res = await getAllMenusOfRestaurant(restaurantId);
      const menus = res.data.Menus;
      if (!menus.length) {
        return;
      }
      setInput(menus);
    };

    try {
      run();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleAdd = () => {
    const newObj = [
      ...input,
      {
        restaurantId: "",
        orderNumber: "",
        title: "",
        imageUrl: "",
        description: "",
      },
    ];
    setInput(newObj);
  };

  //   จัดการ handleSave ตรงนีส่งค่าสร้าง menu
  const handleSave = async (menu) => {
    await createMenu(restaurantId, menu);

    const res = await getAllMenusOfRestaurant(restaurantId);
    const menus = res.data.Menus;

    setInput(menus);
  };

  return (
    <Box sx={{ pt: "40px" }}>
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
        }}
      >
        {input.map((el, idx) => (
          <CardContainer
            key={idx}
            idx={idx}
            orderNumber={el.orderNumber}
            restaurantId={el.restaurantId}
            description={el.description}
            imageUrl={el.imageUrl}
            handleSave={handleSave}
          />
        ))}

        <Button
          variant="contained"
          color="error"
          sx={{ borderRadius: "50px" }}
          onClick={handleAdd}
        >
          <AddIcon fontSize="large" sx={{ fontWeight: "bold" }} />
        </Button>
      </Container>
    </Box>
  );
}

export default ContainerAddMenusPage;
