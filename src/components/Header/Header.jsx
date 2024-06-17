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
            <span className={'header-username'}>
                Привет, {user?.username}!
            </span>
        </div>
    )

}

export default Header;