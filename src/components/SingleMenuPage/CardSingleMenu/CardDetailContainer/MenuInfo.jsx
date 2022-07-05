import { Box, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProfileAvatar from "../../../common/ProfileAvatar";

function MenuInfo({ description, title, creator, websiteUrl, posts }) {
   const [postText, setPostText] = useState()
   
   function kFormatter(num) {
      return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }

   useEffect(() => {
      if (posts === 1) {
         setPostText("1 Post")
      }
      if (posts > 1) {
         const result = kFormatter(posts)
         console.log(result)
         setPostText(`${result} Posts`)
      }
   }, [posts])

   // console.log(posts)
   return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
         {/* <Link href="#">Rakthai.com</Link> */}
         {websiteUrl ? (
            <Link sx={{my: -1}} href={`${websiteUrl}`}>{websiteUrl}</Link>
         ) : (
            <Box sx={{m: -2}}></Box>
         )}
         <Link href="#" underline="none">
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: -2 }}>
               {title}
            </Typography>
         </Link>
         <Box sx={{
            display: "flex",
            alignItems: "center",
            mb: -2
         }} >
            <ProfileAvatar commenterPic={creator.profilePicUrl} commenterFirstName={creator.firstName} commenterLastName={creator.lastName} />
            <Box>
               <Typography variant="h6" sx={{ ml: 2, mb: -1 }}>
                  {creator.firstName + ' ' + creator.lastName}
               </Typography>
               <Typography sx={{ ml: 2 }}>
                  {postText}
               </Typography>
            </Box>
         </Box>
         <Typography>{description}</Typography>
      </Box>
   );
}

export default MenuInfo;
