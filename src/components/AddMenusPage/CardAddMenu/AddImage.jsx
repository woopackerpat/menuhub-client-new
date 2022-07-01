import { Box, styled } from "@mui/material";
import React from "react";
import CartUpload from "./CartUpload";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

function AddImage({
  handleImage,
  idx,
  image,
  setImage,
  cloudUrl,
  setCloudUrl,
}) {
  const Inputs = styled("input")({
    display: "none",
  });

  const handleDeleteImage = (e) => {
    e.stopPropagation();
    setImage(null);
    setCloudUrl("");
  };

  return (
    <Box
      sx={{
        height: "100%",

        borderRadius: "16px",
        // p: Number(`${input[idx].img ? 0 : 4}`),
        backgroundColor: "#EFEFEF",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label htmlFor={`icon-button-file${idx}`}>
        <Inputs
          accept="image/*"
          id={`icon-button-file${idx}`}
          type="file"
          onChange={handleImage}
        />
        {!cloudUrl ? (
          <CartUpload />
        ) : (
          <div style={{ position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                position: "absolute",
                right: "0",
              }}
            >
              <Button onClick={handleDeleteImage}>
                <CloseIcon color="light" style={{ fontSize: "30px" }} />
              </Button>
            </Box>
            <img
              src={cloudUrl}
              alt="Img"
              loading="lazy"
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "16px",
                cursor: "zoom-in",
              }}
            />
          </div>
        )}
      </label>
    </Box>
  );
}

export default AddImage;
