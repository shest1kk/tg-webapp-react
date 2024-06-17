import React from "react";
import './StartPage.css';
import { useTelegram } from "../../../hooks/useTelegram";
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";


const StartPage = () => {
    const {user} = useTelegram();
    
    return (
        <div className={'startPage'}>
            <img className={'startPage-logo'}
            src={require('../../../assets/logo192.png')}
            alt='Логотип ЭйКей'/>
            <div className={'startPage-username'}>Привет, {user?.first_name}!
            <Link to="/sections">
                <Button className={"primary-button"}>
                    Перейти к разделам
                </Button>
            </Link>
            </div>
        </div>
    )

}

export default StartPage;