// AugustPeople.jsx
import React, { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";
import '../../LongRead.css';
import { Link, useNavigate } from "react-router-dom";
import ModalLinks from "../../../ModalLinks/ModalLinks";

const importAll = (r) => {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../../../../assets/PRODUCT/September', false, /\.(jpg|jpeg|png)$/));

const links = {
  'Skillaz - запись на оформление кандидатов': 'https://cloud.akrussia.com/index.php/s/jZwiXRRDBy2CEAL',
  'Пробные тесты' : 'https://cloud.akrussia.com/index.php/apps/files/?dir=/_%D0%9E%D0%B1%D1%89%D0%B0%D1%8F/%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8/AkNews/09.09.24&openfile=104137',
  'Тренер с 17 лет' : 'https://cloud.akrussia.com/index.php/f/104129',
  'Запись на тренинг' : 'https://docs.google.com/spreadsheets/d/1wreWq3XErsRlOOODpYCOP2WrZL1EgbRNcKULkP7DmlQ/edit?hl=ru&gid=0#gid=0'
};

const SeptemberProduct = () => {
  const [loaded, setLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(false); // Состояние для кнопки
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

  const totalImages = Object.keys(images).length;
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setLoadedCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    if (loadedCount === totalImages) {
      setLoaded(true);
      setButtonVisible(true); // Показываем кнопку после загрузки всех изображений
    }
  }, [loadedCount, totalImages]);

  const handleBackClick = () => {
    navigate(-1); // Возвращает пользователя на предыдущую страницу
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="AugustPeople">
      {!loaded && (
        <div className="loader">
          <SyncLoader
            color="#fff"
            size={15}
            margin={5}
            aria-label="sync-loading"
          />
          <p className="loading-text">Грузимся...</p>
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

      {/* Скрываем кнопку "Назад", если модальное окно открыто */}
      {buttonVisible && !isModalOpen && (
        <div className="button-container">
          <Link to='/sections'>
            <button className="back-button">Назад</button>
          </Link>
          {/* <button className="modal-button" onClick={toggleModal}>
            Ссылки
          </button> */}
        </div>
      )}

      <ModalLinks isOpen={isModalOpen} onClose={toggleModal} links={links} />
    </div>
  );
};

export default SeptemberProduct;
