import { createContext, useContext } from "react";

const PostContext = createContext();

function PostContextProvider({ children }) {
   return <PostContext.Provider>{children}</PostContext.Provider>;
}

const usePost = () => {
   const ctx = useContext(PostContext);
   return ctx;
};

export default PostContextProvider;

export { usePost };
