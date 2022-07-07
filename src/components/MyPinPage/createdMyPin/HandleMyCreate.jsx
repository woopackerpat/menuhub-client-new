import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModalReportPin from "../../common/cartItems/ModalReportPin";
import { usePin } from "../../../contexts/PinContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "../../../config/axios";

function HandleMyCreate({ id }) {
  const [showReport, setShowReport] = useState(null);

  const { fetchMyCreated } = usePin();

  const navigate = useNavigate();

  const isMenuReport = Boolean(showReport);

  const handleShareDropdown = (event) => {
    setShowReport(event.currentTarget);
  };
  const handleMenuCloseReport = () => {
    setShowReport(null);
  };

  const handleEdit = () => {
    navigate(`/draftMenu/${id}`);
    setShowReport(null);
  };

  const handleDelete = async () => {
    await axios.delete(`/restaurant/delete/${id}`);
    fetchMyCreated();
    setShowReport(null);
  };

  const dropId = "drop-share";

  const renderDropReport = (
    <Menu
      anchorEl={showReport}
      id={dropId}
      keepMounted
      open={isMenuReport}
      onClose={handleMenuCloseReport}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <Typography variant="body1" align="center">
          My Created Album
        </Typography>
        <Typography
          fontWeight="bold"
          sx={{
            "&:hover": { backgroundColor: "#efefef" },
            p: 2,
            cursor: "pointer",
            borderRadius: "16px",
            backgroundColor: "#f2f2f2",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => handleEdit()}
        >
          Edit
        </Typography>
        <Typography
          fontWeight="bold"
          sx={{
            "&:hover": { backgroundColor: "#efefef" },
            p: 2,
            cursor: "pointer",
            borderRadius: "16px",
            backgroundColor: "#f2f2f2",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => handleDelete()}
        >
          Delete
        </Typography>
      </Box>
    </Menu>
  );

  return (
    <>
      <IconButton
        style={{ backgroundColor: "rgb(234, 234, 234,0.7)" }}
        aria-controls={dropId}
        onClick={handleShareDropdown}
      >
        <MoreHorizIcon color="dark" style={{ fontSize: "32px" }} />
      </IconButton>

      {renderDropReport}
    </>
  );
}

export default HandleMyCreate;
