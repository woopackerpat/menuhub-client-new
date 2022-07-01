import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getMyDraft } from "../../api/menu";
import { useNavigate } from "react-router-dom";

// const listDraft = [
//    {
//       id: 1,
//       img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//    },
//    {
//       id: 2,
//       img: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600",
//    },
//    {
//       id: 3,
//       img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//    },
//    {
//       id: 4,
//       img: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600",
//    },
//    {
//       id: 5,
//       img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//    },
//    {
//       id: 6,
//       img: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600",
//    },
// ];

function FooterDraft() {
  const [listDraft, setListDraft] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      const res = await getMyDraft();
      const myDraft = res.data.foundMyDraftRestaurants;
      setListDraft(myDraft);
    };
    run();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "700px", mb: "50px", justifyContent: "center" }}
    >
      {listDraft.map((item) => {
        return (
          <Grid
            item
            xs={3}
            sx={{
              filter: "grayscale(50%)",
              "&:hover": { filter: "grayscale(0%)" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer"
            }}
            onClick={() => navigate(`/draftMenu/${item.id}`)}
            // style={{ backgroundColor: "red" }}
          >
            <img
              key={item.id}
              src={item.Menus[0]?.imageUrl}
              alt="img"
              loading="lazy"
              style={{
                objectFit: "cover",
                width: "90%",
                height: "100%",
                borderRadius: "16px",
                cursor: "zoom-in",
              }}

              //   onClick = {}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
export default FooterDraft;
