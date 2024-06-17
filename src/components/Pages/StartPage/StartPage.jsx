import React from "react";
import './StartPage.css';
import { useTelegram } from "../../../hooks/useTelegram";


const StartPage = () => {
    const {user} = useTelegram();
    
    return (
        <div className={'startPage'}>
            <img className={'startPage-logo'}
            src={require('../../../assets/logo192.png')}
            alt='Логотип ЭйКей'/>
            <div className={'startPage-username'}>Привет, {user?.first_name}!</div>
        </div>
    )

}

export default StartPage;