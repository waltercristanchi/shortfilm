import React from 'react';
import './navbar.css'
import { useState } from 'react';
import clapperBoard from '../assets/clapperboard.svg'
import menu from '../assets/menu.svg'
import settings from '../assets/settings.svg'
import news from '../assets/new.svg'
import favs from '../assets/heart.svg'
const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
       <div className="menu">
                              <img onClick={()=>setIsMenuOpen(!isMenuOpen)} className="menuButton" src={menu} alt="" />
        <div></div>
            <div className={isMenuOpen?'navBar navBar-expanded' : 'navBar'}>
            <ul>
                
                   <li>
                   <img onClick={()=>setIsMenuOpen(!isMenuOpen)} src={menu} alt="" />
                   </li>
                
                <li>
                    <img src={clapperBoard} alt="" />
                    <p>Inicio</p>
                </li>
                <li>
                <img src={clapperBoard} alt="" />

                   <p>Series</p>
                </li>
              <li>
              <img src={clapperBoard} alt="" />

              <p>Peliculas</p>
              </li>
            <li>
            <img src={news} alt="" />

                <p>Novedades</p>
            </li>
               <li>
               <img src={favs} alt="" />

               <p>Mi lista</p>

               </li>
               

               <li>
               <img src={settings} alt="" />

               <p>Configuración</p>

               </li>
               

            </ul>
        </div>

       </div>
    );
};

export default Navbar;