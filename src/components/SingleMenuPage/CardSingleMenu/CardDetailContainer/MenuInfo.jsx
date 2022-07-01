import { Box, Link, Typography } from "@mui/material";

function MenuInfo({ description, title }) {
   return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
         <Link href="#">Rakthai.com</Link>
         <Link href="#" underline="none">
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
               {title}
            </Typography>
         </Link>
         <Typography>{description}</Typography>
      </Box>
   );
}

export default MenuInfo;
