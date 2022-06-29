import { createContext, useContext } from "react";

const MenusContext = createContext();

function MenusContextProvider({ children }) {
  return <MenusContext.Provider>{children}</MenusContext.Provider>;
}

const useMenus = () => {
  const ctx = useContext(MenusContext);
  return ctx;
};

export default MenusContextProvider;

