import { Box, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProfileAvatar from "../../../common/ProfileAvatar";

function MenuInfo({ description, title, creator, websiteUrl, posts }) {
  const [postText, setPostText] = useState();

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  useEffect(() => {
    if (posts === 1) {
      setPostText("1 Post");
    }
    if (posts > 1) {
      const result = kFormatter(posts);
      console.log(result);
      setPostText(`${result} Posts`);
    }
  }, [posts]);

  // console.log(posts)
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* <Link href="#">Rakthai.com</Link> */}
      {websiteUrl ? (
        <Link sx={{ my: -1 }} href={`${websiteUrl}`}>
          {websiteUrl}
        </Link>
      ) : (
        <Box sx={{ m: -2 }}></Box>
      )}
      <Link href="#" underline="none">
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: -2 }}>
          {title}
        </Typography>
      </Link>
      <Typography sx={{  mb: -1 }}>{description}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: -2,
        }}
      >
        <ProfileAvatar
          commenterPic={creator.profilePicUrl}
          commenterFirstName={creator.firstName}
          commenterLastName={creator.lastName}
        />
        <Box>
          <Typography
            variant="h6"
            sx={{ ml: 2, fontWeight: "bold" }}
            style={{ fontSize: "14px" }}
          >
            {creator.firstName + " " + creator.lastName}
          </Typography>
          <Typography
            sx={{ ml: 2 }}
            style={{ fontSize: "14px", color: "#6d6d6d" }}
          >
            {postText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MenuInfo;
