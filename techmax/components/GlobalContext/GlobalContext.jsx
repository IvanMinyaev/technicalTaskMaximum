import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [brand, setBrand] = useState();
  const [brandsList, setBrandsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch('https://api.carmart.ru/cars/temp?page=1&perPage=24&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand%5B0%5D');
      const data = await responce.json();
      const brands = data.meta.filters.brand;
      setBrandsList(brands);
      if (!brand) {
        setBrand(brands[0]);
      }
    }
    fetchData();
  }, [brand]);


  return (
    <GlobalContext.Provider
      value={{
        brand,
        brandsList,
        setBrand,
        setBrandsList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
