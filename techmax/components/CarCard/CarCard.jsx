import React from 'react';

import styles from './CarCard.module.scss'

function CarCard({ car }) {


  function getRandomMileage(min, max) {
    return Math.random() * (max - min) + min;
  };

  function numberFormat(num) {
    const n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  };

  return (
    <div className="col-lg-8 col-md-12 col-sm-24 p-3">
      <div className={`${styles.card} p-3`}>
        <div className={styles.title}>
          <div className={styles.modelName}>
            {car.classifieds.description} <sup className={styles.modelYear}>{car.feedData.modelYear}</sup>
          </div>
          <div className={styles.vin}>
            {car.vin}
          </div>
        </div>
        <div className={styles.img}>
          <img src={car.photobank.imgs[0].urlThumb} alt='photo'></img>
        </div>
        <div className="row m-0 mt-2">
          <div className="col-sx-12 p-3">
            <div className={styles.propTitle}>ДВИГАТЕЛЬ</div>
            <div className={styles.propdescription}>
              {car.feedData.equipmentVariantEngineCapacity === 0 ?
                'Электромо'
                :
                String(car.feedData.equipmentVariantEngineCapacity).split('').slice(0, 2).join(',') + ' л'}<span className={`${styles.grnColor} ${styles.propDivider}`}>/</span>
              {car.feedData.equipmentVariantEnginePower} лс<span className={`${styles.grnColor} ${styles.propDivider}`}>/</span>{car.feedData.equipmentVariantFuelType}
            </div>
          </div>
          <div className="col-sx-12 p-3">
            <div className={styles.propTitle}>КПП</div>
            <div className={styles.propdescription}>
              {car.feedData.equipmentVariantTransmissionType}
            </div>
          </div>
        </div>
        <div className="row m-0 mt-2">
          <div className="col-sx-12 p-3">
            <div className={styles.propTitle}>ПРОБЕГ</div>
            <div className={styles.propdescription}>
              {`${numberFormat(Math.floor(getRandomMileage(35000, 128000)))} км`}
            </div>
          </div>
          <div className="col-sx-12 p-3">
            <div className={styles.propTitle}>ЦВЕТ</div>
            <div className={styles.propdescription}>
              {car.feedData.colorByClassifierName}
            </div>
          </div>
        </div>
        <div className="row m-0 mt-2">
          <div className="col-sx-12 p-3">
            <div className={styles.priceFont}>{numberFormat(car.feedData.autoPrice)} <span>₽</span></div>
          </div>
          <div className="col-sx-12 p-3">
            <button className={styles.btn}>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
