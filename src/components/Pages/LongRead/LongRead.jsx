import React from "react";
import './LongRead.css';
const LongRead = () => {
    return (
        <div className={LongRead}>
            <div className='FirstPage'>
            <img 
                    className="FirstPage-img"
                    src={require('../../../assets/1.jpg')}
                    alt="Лонгрид"
                />
            </div>

            <div className='SecondPage'>
            <img 
                    className="SecondPage-img"
                    src={require('../../../assets/2.jpg')}
                    alt="Лонгрид"
                />
            </div>

        </div>
        
    );
};

export default LongRead;