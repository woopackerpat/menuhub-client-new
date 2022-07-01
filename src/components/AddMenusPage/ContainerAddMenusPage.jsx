import { Box, Button, Container } from "@mui/material";
import CardContainer from "./CardAddMenu/CardContainer";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
function ContainerAddMenusPage() {
  const initData = [
    {
      restaurantId: 1,
      orderNumber: 1,
      title: "test1",
      imageUrl: "https://omnivorescookbook.com/cantonese-wonton-noodle-soup/",
      description: "testesetestetset",
    },
    {
      restaurantId: 1,
      orderNumber: 2,
      title: "test2",
      imageUrl: "https://omnivorescookbook.com/cantonese-wonton-noodle-soup/",
      description: "testesetestetset",
    },
    {
      restaurantId: 1,
      orderNumber: 3,
      title: "test3",
      imageUrl: "https://omnivorescookbook.com/cantonese-wonton-noodle-soup/",
      description: "testesetestetset",
    },
  ];

  const [input, setInput] = useState(initData);

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

  const handleDelete = () => {};

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
            setInput={setInput}
            description={el.description}
            imageUrl={el.imageUrl}
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
