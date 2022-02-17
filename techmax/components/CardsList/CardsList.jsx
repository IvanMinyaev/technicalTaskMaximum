import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

import CarCard from "../CarCard/CarCard";

function CardsList() {

  const [cars, setCars] = useState(null);
  const { brand } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch(`https://api.carmart.ru/cars/temp?page=1&perPage=24&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand%5B0%5D=${brand}`);
      const data = await responce.json();
      setCars(data.list);
    }
    fetchData();
  }, [brand]);

  return (
    <div className="row m-0">
      {cars?.length && cars.map(car => <CarCard key={car._id} car={car} />)}
    </div>
  );
}

export default CardsList;
