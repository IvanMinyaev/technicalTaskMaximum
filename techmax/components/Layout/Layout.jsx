import { useState } from "react";

import { GlobalProvider } from "../GlobalContext/GlobalContext";
import CardsList from "../CardsList/CardsList";
import CarFilter from "../CarFilter/CarFilter";

import styles from './Layout.module.scss'


function Layout() {

  return (
    <GlobalProvider>
      <div className={styles.main}>
      <CarFilter />
      <CardsList />
      </div>
    </GlobalProvider>
  );
}

export default Layout;
