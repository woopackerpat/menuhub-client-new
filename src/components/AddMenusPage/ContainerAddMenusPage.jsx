import { Box, Button, Container, Typography } from "@mui/material";
import CardContainer from "./CardAddMenu/CardContainer";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import {
  createMenu,
  getAllMenusOfRestaurant,
  updateRestaurant,
} from "../../api/menu";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../config/axios";
import { reorderMenu } from "../../api/menu";

function ContainerAddMenusPage() {
  const [input, setInput] = useState([{}]);

  const [order, setOrder] = useState([]);
  
  const { restaurantId } = useParams();

  const navigate = useNavigate()

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
    // เพิ่ม neworder เข้าไปใน function

    await reorderMenu(restaurantId, order);

    const res = await getAllMenusOfRestaurant(restaurantId);
    const menus = res.data.Menus;

    setInput(menus);
  };

  const handleUpdate = async (menuId, updatedMenu) => {
    await axios.patch(`/restaurant/menu/${menuId}`, updatedMenu);

    const res = await getAllMenusOfRestaurant(restaurantId);
    const menus = res.data.Menus;

    setInput(menus);
  };

  const handleDelete = async (menuId) => {
    await axios.delete(`/restaurant/menu/${menuId}`);

    const res = await getAllMenusOfRestaurant(restaurantId);
    const menus = res.data.Menus;

    setInput(menus);
  };

  const handleInsert = (idx) => {
    const newObj = [...input];

    newObj.splice(idx + 1, 0, {
      orderNumber: "",
      title: "",
      imageUrl: "",
      description: "",
    });

    const newOrder = newObj.map((el, idx) => ({
      id: el.id,
      orderNumber: idx + 1,
    }));

    setOrder(newOrder);
    setInput(newObj);
  };

  const handlePublish = async (id, details) => {
    await updateRestaurant(id, details);

  };

  return (
    <Box sx={{ pt: "20px" }}>
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "20px",
        }}
      >
        <Container
          fixed
          sx={{ display: "flex", justifyContent: "space-between", mx: "120px" }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold" }}
            style={{ fontColor: "#5b5b5b" }}
          >
            Add menus
          </Typography>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            
            <Button
              variant="contained"
              color="error"
              sx={{
                fontWeight: "normal",
                textTransform: "none",
                fontSize: "18px",
                ml: "10px"
              }}
              onClick={() => handlePublish(restaurantId, { isDraft: 'unpublish' })}
            >
              Publish
            </Button>
          </Box>
        </Container>
      </Container>
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
        }}
      >
        {input.map((menuDetails, idx) => (
          <CardContainer
            key={menuDetails.id}
            idx={idx}
            handleSave={handleSave}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            handleInsert={handleInsert}
            menuDetails={menuDetails}
            restaurantName={
              Object.keys(menuDetails).length && input[0].Restaurant.name
            }
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
