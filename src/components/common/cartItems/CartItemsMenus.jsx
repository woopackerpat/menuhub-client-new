import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import DropdownShare from "./DropdownShare";
import { useNavigate } from "react-router-dom";
import DropdownReport from "./DropdownReport";

function CartItemsMenus({ item }) {
  const { title, imageUrl, id } = item;
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  const handleClickRef = () => {
    navigate(`/singleMenu/${id}`);
  };
  return (
    <Box
      sx={{ position: "relative" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="hvr-grow"
    >
      <Box onClick={() => handleClickRef()}>
        <img
          src={imageUrl}
          alt="img"
          loading="lazy"
          style={{
            objectFit: "cover",
            width: "100%",
            borderRadius: "16px",
            cursor: "zoom-in",
          }}
        />
      </Box>
      {show && (
        <>
          <Box
            sx={{
              position: "absolute",
              bottom: 40,
              right: 12,
              display: "flex",
              gap: 1,
            }}
          >
            <DropdownShare id={id} />
            <DropdownReport />
          </Box>
        </>
      )}
      <Typography
        sx={{ pl: "12px", fontSize: "14px", fontWeight: "300" }}
        className="thai"
      >
        {title}
      </Typography>
    </Box>
  );
}

export default CartItemsMenus;
