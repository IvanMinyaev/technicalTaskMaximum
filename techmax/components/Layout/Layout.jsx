import { useState } from "react";

import { GlobalProvider } from "../GlobalContext/GlobalContext";
import CardsList from "../CardsList/CardsList";
import CarFilter from "../CarFilter/CarFilter";


function Layout() {

  const [brand, setBrand] = useState();
  const [brandsList, setBrandsList] = useState([]);


  return (
    <GlobalProvider>
      <CarFilter />
      <CardsList />
    </GlobalProvider>
  );
}

export default Layout;
