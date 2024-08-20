import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../StartPage/StartPage.css';
import Button from "../../Buttons/Button";

// Словарь ссылок
const linkDictionary = {
    PRODUCT: {
        // Январь: "/product/january",
        // Февраль: "/product/february",
        // Март: "/product/march",
        // Апрель: "/product/april",
        // Май: "/product/may",
        Июнь: "/product/june",
        Июль: "/product/july",
        // Август: "/product/august",
        // Сентябрь: "/product/september",
        // Октябрь: "/product/october",
        // Ноябрь: "/product/november",
        // Декабрь: "/product/december",
    },
    PROMO: {
        // Январь: "/promo/january",
        // Февраль: "/promo/february",
        // Март: "/promo/march",
        // Апрель: "/promo/april",
        // Май: "/promo/may",
        // Июнь: "/promo/june",
        // Июль: "/promo/july",
        Август: "/promo/august",
        // Сентябрь: "/promo/september",
        // Октябрь: "/promo/october",
        // Ноябрь: "/promo/november",
        // Декабрь: "/promo/december",
    },
    PEOPLE: {
        Январь: "/people/january",
        Февраль: "/people/february",
        Март: "/people/march",
        Апрель: "/people/april",
        Май: "/people/may",
        Июнь: "/people/june",
        Июль: "/people/july",
        Август: "/people/august",
        Сентябрь: "/people/september",
        Октябрь: "/people/october",
        Ноябрь: "/people/november",
        Декабрь: "/people/december",
    },
    PLACE: {
        Январь: "/place/january",
        Февраль: "/place/february",
        Март: "/place/march",
        Апрель: "/place/april",
        Май: "/place/may",
        Июнь: "/place/june",
        Июль: "/place/july",
        Август: "/place/august",
        Сентябрь: "/place/september",
        Октябрь: "/place/october",
        Ноябрь: "/place/november",
        Декабрь: "/place/december",
    },
};

const AllSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    // Открытие модального окна с выбранной категорией
    const handleButtonClick = (category) => {
        if (category === "PEOPLE" || category === "PLACE") {
            alert('Скоро будет :)');
        } else {
            setSelectedCategory(category);
            setIsModalOpen(true);
        }
    };

    // Закрытие модального окна
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };

    // Обработка клика по месяцу
    const handleMonthClick = (month) => {
        if (selectedCategory === "PEOPLE" || selectedCategory === "PLACE") {
            alert(`${selectedCategory} - ${month}`);
        } else {
            const url = linkDictionary[selectedCategory][month];
            if (url) {
                // Навигация по ссылке
                window.location.href = url;
            } else {
                alert('Ссылка отсутствует');
            }
        }
        handleCloseModal();
    };

    // Обработчик клика вне модального окна
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        // Добавление обработчика кликов на документ
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Удаление обработчика кликов при размонтировании компонента
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="StartPage_wrapper">
            <div className="StartPage_text_wrapper">
                <div className="StartPage_username">
                    <Button className={'startpage-button'} onClick={() => handleButtonClick('PRODUCT')}>PRODUCT</Button>
                    <Button className={'startpage-button'} onClick={() => handleButtonClick('PROMO')}>PROMO</Button>
                    <Button className={'startpage-button'} onClick={() => handleButtonClick('PEOPLE')}>PEOPLE</Button>
                    <Button className={'startpage-button'} onClick={() => handleButtonClick('PLACE')}>PLACE</Button>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content" ref={modalRef}>
                        <h2 className={'selected-category'}>{selectedCategory}</h2>
                        <ul>
                            {Object.keys(linkDictionary[selectedCategory]).map((month) => (
                                <li
                                    className={'months'}
                                    key={month}
                                >
                                    <Link
                                        to={linkDictionary[selectedCategory][month]}
                                        onClick={handleCloseModal}
                                    >
                                        {month}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Button className={'modalClose-button'} onClick={handleCloseModal}>Закрыть</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllSection;