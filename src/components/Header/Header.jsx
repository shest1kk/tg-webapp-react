import React from "react";
import './Header.css';
import { useTelegram } from "../../hooks/useTelegram";


const Header = () => {
    const {user} = useTelegram();
    
    return (
        <div className={'header'}>
            <img className={'header-logo'}
            src={require('../../assets/logo192.png')}
            alt='Логотип ЭйКей'/>
            <div className={'header-username'}>Привет, {user?.first_name}!</div>
        </div>
    )

}

export default Header;