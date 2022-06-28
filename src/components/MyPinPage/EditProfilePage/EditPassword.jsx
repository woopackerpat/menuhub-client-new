import { Box, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PasswordEditForm from "./PasswordFormEdit";

function EditPassword({ handleClosePass, open }) {
   console.log(handleClosePass, open);
   return (
      <>
         <Dialog
            open={open}
            onClose={handleClosePass}
            maxWidth="md"
            sx={{
               textAlign: "center",
            }}
         >
            <Box display="flex" justifyContent="right">
               <IconButton aria-label="close" onClick={handleClosePass}>
                  <CloseIcon />
               </IconButton>
            </Box>
            <DialogContent>
               <PasswordEditForm />
            </DialogContent>
         </Dialog>
      </>
   );
}

export default EditPassword;
