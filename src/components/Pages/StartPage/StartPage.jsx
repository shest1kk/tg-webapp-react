import React, { useState, useEffect } from "react";
import './StartPage.css';
import { useTelegram } from "../../../hooks/useTelegram";
import Button from "../../Buttons/Button";
import { Link, useNavigate } from "react-router-dom";

const buttonsData = {
    main: [
        { label: "PEOPLE", link: "#" },
        { label: "PLACE", link: "#" },
        { label: "PROMO", link: "#" },
        { label: "PRODUCT", link: "#" }
    ],
    months: {
        PEOPLE: [
            { label: "Январь", link: null },
            { label: "Февраль", link: null },
            { label: "Март", link: null },
            { label: "Апрель", link: null },
            { label: "Май", link: null },
            { label: "Июнь", link: "/people/june" },
            { label: "Июль", link: "/people/july" },
            { label: "Август", link: "/people/august" },
            // { label: "Сентябрь", link: null },
            // { label: "Октябрь", link: null },
            // { label: "Ноябрь", link: null },
            // { label: "Декабрь", link: null }
        ],
        PLACE: [
            { label: "Январь", link: null },
            { label: "Февраль", link: null },
            { label: "Март", link: null },
            { label: "Апрель", link: null },
            { label: "Май", link: null },
            { label: "Июнь", link: "/place/june" },
            { label: "Июль", link: "/place/july" },
            { label: "Август", link: "/place/august" },
            // { label: "Сентябрь", link: null },
            // { label: "Октябрь", link: null },
            // { label: "Ноябрь", link: null },
            // { label: "Декабрь", link: null }
        ],
        PROMO: [
            { label: "Январь", link: null },
            { label: "Февраль", link: null },
            { label: "Март", link: null },
            { label: "Апрель", link: null },
            { label: "Май", link: null },
            { label: "Июнь", link: "/promo/june" },
            { label: "Июль", link: "/promo/july" },
            { label: "Август", link: "/promo/august" },
            // { label: "Сентябрь", link: null },
            // { label: "Октябрь", link: null },
            // { label: "Ноябрь", link: null },
            // { label: "Декабрь", link: null }
        ],
        PRODUCT: [
            { label: "Январь", link: null },
            { label: "Февраль", link: null },
            { label: "Март", link: null },
            { label: "Апрель", link: null },
            { label: "Май", link: null },
            { label: "Июнь", link: "/product/june" },
            { label: "Июль", link: "/product/july" },
            { label: "Август", link: "/product/august" },
            // { label: "Сентябрь", link: null },
            // { label: "Октябрь", link: null },
            // { label: "Ноябрь", link: null },
            // { label: "Декабрь", link: null }
        ]
    }
};

const StartPage = () => {
    const { user, tg } = useTelegram();
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentButtons, setCurrentButtons] = useState(buttonsData.main);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {}, [tg]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        setCurrentButtons(buttonsData.main);
        setSelectedCategory(null);
    };

    const handleMainButtonClick = (buttonLabel) => {
        if (buttonLabel === "Назад") {
            if (selectedCategory) {
                setCurrentButtons(buttonsData.main);
                setSelectedCategory(null);
            } else {
                closeModal();
            }
        } else {
            setSelectedCategory(buttonLabel);
            setCurrentButtons(buttonsData.months[buttonLabel]);
        }
    };

    const handleMonthClick = (link) => {
        if (link) {
            closeModal();
            navigate(link);
        } else {
            alert("Скоро будет");
        }
    };

    return (
        <div className="StartPage_wrapper">
            <div className="StartPage_image">
                <img className="StartPage_image_img" alt="Логотип ЭйКей" />
            </div>
            <div className="StartPage_text_wrapper">
                <div className="StartPage_username">
                    <b>Привет, {user?.first_name}!<br /></b>
                </div>
                <div className="StartPage_description">
                    Мы собрали главные новости PEOPLE, PRODUCT, PROMO, PLACE в одном месте!<br />
                </div>
                <div className="StartPage_description_plus">
                    Ты можешь выбрать интересующий тебя блок и месяц, чтобы всегда быть в курсе текущих, а также прошлых новостей!<br />
                </div>
                <Button onClick={openModal} className="startpage-button">
                    Выбрать
                </Button>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {currentButtons.map((button, index) => (
                            <Button
                                key={index}
                                className="modal-button"
                                onClick={() =>
                                    selectedCategory ? handleMonthClick(button.link) : handleMainButtonClick(button.label)
                                }
                            >
                                {button.label}
                            </Button>
                        ))}
                        <Button className="modal-button" onClick={() => handleMainButtonClick("Назад")}>
                            Назад
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StartPage;
