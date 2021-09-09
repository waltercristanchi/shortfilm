import React from 'react';
import { useState, useEffect} from 'react';
import Slider from './Slider'
import '../components/home.css'
import virgen from '../assets/download.jfif'
const Home = ()=>{


  return (
        <div className="main">
            <div className="searchbar">
                <input type="text" placeholder="buscar..." />
            </div>
            <div className="list topRated">
                <h3 className="text">mejor valorados</h3>
                <div className="container">
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                </div>
            </div>
            <div className="list topViewed">
            <h3 className="text">mas vistos</h3>
                <div className="container">
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                 <div className="card">
                 <img src={virgen} alt="" />
                 </div>
                </div>
            </div>

        </div>
    )
}
export default Home