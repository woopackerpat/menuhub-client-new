import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModalReportPin from "./ModalReportPin";
import ModalEditPin from "./ModalEditPin";
import ModalDeletePin from "./ModalDeletePin";

function DropdownEditPin({ pinId, name }) {
  const [showPinDropdown, setShowPinDropdown] = useState(null);

  const isMenuEdit = Boolean(showPinDropdown);

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenEdit = e => {
    e.stopPropagation();
    setOpenEdit(true);
    handleMenuClose(e);
  };

  const handleOpenDelete = e => {
    e.stopPropagation();
    setOpenDelete(true);
    handleMenuClose(e);
  };

  const handleCloseEdit = e => {
    e.stopPropagation();
    handleMenuClose(e);
    setOpenEdit(false);
  };

  const handleCloseDelete = e => {
    e.stopPropagation();
    handleMenuClose(e);
    setOpenDelete(false);
  };

  const handleEditDropdown = e => {
    e.stopPropagation();
    setShowPinDropdown(e.currentTarget);
  };

  const handleMenuClose = e => {
    e.stopPropagation();
    setShowPinDropdown(null);
  };

  const dropId = "drop-share";

  const renderDropReport = (
    <Menu
      anchorEl={showPinDropdown}
      id={dropId}
      keepMounted
      open={isMenuEdit}
      onClose={handleMenuClose}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
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
        <Typography
          fontWeight="bold"
          sx={{
            "&:hover": { backgroundColor: "#efefef" },
            padding: "10px 20px",
            cursor: "pointer",
            textAlign: "center",
            borderRadius: "16px",
            backgroundColor: "#f2f2f2",
          }}
          onClick={handleOpenEdit}
        >
          Edit Pin
        </Typography>
        <Typography
          fontWeight="bold"
          sx={{
            "&:hover": { backgroundColor: "#efefef" },
            padding: "10px 20px",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "16px",
            backgroundColor: "#f2f2f2",
          }}
          onClick={handleOpenDelete}
        >
          Delete Pin
        </Typography>
      </Box>
    </Menu>
  );

  return (
    <>
      <IconButton
        aria-controls={dropId}
        onClick={handleEditDropdown}
        sx={{
          backgroundColor: "#dedede",
          "&:hover": { backgroundColor: "#dedede" },
        }}
      >
        <MoreHorizIcon color="dark" style={{ fontSize: "32px" }} />
      </IconButton>
      <ModalEditPin
        open={openEdit}
        handleClose={handleCloseEdit}
        pinId={pinId}
        name={name}
      />
      <ModalDeletePin
        open={openDelete}
        handleClose={handleCloseDelete}
        pinId={pinId}
      />
      {renderDropReport}
    </>
  );
}

export default DropdownEditPin;
