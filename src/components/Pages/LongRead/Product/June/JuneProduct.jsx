import React, { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners"; // Импортируем SyncLoader
import '../../LongRead.css';
import { Link } from "react-router-dom";
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../../../../assets/PRODUCT/June', false, /\.(jpg|jpeg|png)$/));

const JuneProduct = () => {
  const [loaded, setLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(false); // Добавлено состояние для кнопки

  const totalImages = Object.keys(images).length;

  const handleImageLoad = () => {
    setLoadedCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    if (loadedCount === totalImages) {
      setLoaded(true);
      setButtonVisible(true); // Показываем кнопку после загрузки всех изображений

    }
  }, [loadedCount, totalImages]);

  return (
    <div className={'LongRead'}>
      {!loaded && (
        <div className="loader">
          <SyncLoader
            color="#fff" // Цвет спиннера
            size={15} // Размер полос
            margin={5} // Отступ между полосами
            aria-label="sync-loading"
          />
          <p className="loading-text">Грузимся...</p> {/* Текст загрузки */}
        </div>
      )}
      {Object.keys(images).map((key, index) => (
        <img
          key={index}
          className={`Page-img Page-img-${index + 1} ${loaded ? 'visible' : 'hidden'}`}
          src={images[key]}
          alt={`Лонгрид ${index + 1}`}
          onLoad={handleImageLoad}
        />
      ))}

      {buttonVisible && (
        <Link to='/'>
          <button className="startpage-button">
            Назад
          </button>
        </Link>
      )}

    </div>
  );
};

export default JuneProduct;
