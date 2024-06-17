import React from "react";
import './AllSection.css';
import Button from '../../Buttons/Button';
const AllSection = () => {
    return (
        <div>
            Выбери раздел
            <Button className="primary-button" onClick={() => alert('Кнопка нажата!')}>
                Нажми меня
            </Button>
        </div>
    );
};

export default AllSection;