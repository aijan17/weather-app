import React from 'react';
import {Link}  from 'react-router-dom';

export const NavPanel = () => {
    return (
        <div className="panel_navs">
            <ul class="nav" style={{justifyContent:"space-evenly"}}>
                <li class="nav-item">
                    <Link to="" class="nav-link active link-light" aria-current="page" href="">Сегодня</Link>
                </li>
                <li class="nav-item">
                    <Link to="/timezone"  class="nav-link link-success" href="#">Почасовой прогноз</Link>
                </li>
            </ul>
        </div>
    );
};

