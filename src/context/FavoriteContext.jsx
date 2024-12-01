import { createContext, useState } from "react";

export const FavContext = createContext();

export default function FavoriteContext({ children }) {
  const [favRecipes, setFavRecipes] = useState([]);
  return (
    <FavContext.Provider value={{ favRecipes, setFavRecipes }}>
      {children}
    </FavContext.Provider>
  );
}
