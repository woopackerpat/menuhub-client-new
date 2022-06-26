import { createContext, useContext } from "react";

const InfiniteScrollContext = createContext();

function InfiniteScrollProvider({ children }) {
   const fetchPosts = async ({ pageParam = 1 }) => {
      const response = await fetch(
         `https://picsum.photos/v2/list?page=${pageParam}&limit=10`
      );
      const results = await response.json();
      return { results, nextPage: pageParam + 1, totalPages: 1000 };
   };

   return (
      <InfiniteScrollContext.Provider value={{ fetchPosts }}>
         {children}
      </InfiniteScrollContext.Provider>
   );
}

const useInfiniteScroll = () => {
   const ctx = useContext(InfiniteScrollContext);
   return ctx;
};

export default InfiniteScrollProvider;

export { useInfiniteScroll };
