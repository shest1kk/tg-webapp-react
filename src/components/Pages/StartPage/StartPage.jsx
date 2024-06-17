import React from "react";
import './StartPage.css';
import { useTelegram } from "../../../hooks/useTelegram";
import Button from "../../Buttons/Button";
import { Link } from "react-router-dom";

const StartPage = () => {
    const { user } = useTelegram();
    
    return (
        <div className={"startPage"}>
            <div className={'startPage-logo'}>
            <img 
                    className={"startPage-logo"}
                    src={require('../../../assets/logo.png')}
                    alt="Логотип ЭйКей"
                />
            </div>
            <div className={"startPage-wrapper"}>
                <div className={'startPage-username'}><b>Привет, {user?.first_name}!</b></div>
                <div className={'startPage-description'}>Здесь ты можешь узнать подробную информацию о мероприятии SSM2024</div>
                <Link to={"/sections"}>
                    <Button className={'primary-button'}>
                        Перейти к разделам
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default StartPage;
