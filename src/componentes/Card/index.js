import React from 'react';
import './style.css';

function Card() {
    return(
        <div className="card">
            <p>CONFEITEIRO</p>
            <p><img src ="ima/conf.jpg" height="250px" width="270px"></img></p>
            <p>160 horas</p>
            <p>R$ 1750,00</p>
        </div>
    );
}

export default Card;