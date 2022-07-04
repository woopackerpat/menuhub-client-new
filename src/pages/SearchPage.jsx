import { Backdrop, CircularProgress } from "@mui/material";
import ContainerSearch from "../components/SearchPage/ContainerSearch";
import { useSearch } from "../contexts/SearchContextProvider";

function SearchPage() {

   const {isLoading} = useSearch()

   return (
      <div>
         <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={isLoading}
                
              >
                <CircularProgress color="error" />
              </Backdrop>
         <ContainerSearch />
      </div>
   );
}
export default SearchPage;
