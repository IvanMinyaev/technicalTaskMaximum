import React, { useContext, useRef } from 'react';

import styles from './CarFilter.module.scss'

import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CarFilter() {

  const filterBlock = useRef();

  const { brand } = useContext(GlobalContext);
  const { setBrand } = useContext(GlobalContext);
  const { brandsList } = useContext(GlobalContext);

  const handleChange = () => {
    setBrand(filterBlock.current.value)
  };

  return (
    <div >
      <select className={styles.filterSelect} value={brand} ref={filterBlock} onChange={handleChange}>
        {brandsList?.length && brandsList.map(brand => <option key={uuidv4()} value={brand}> {brand} </option>)}
      </select>
    </div>
  );
}

export default CarFilter;
