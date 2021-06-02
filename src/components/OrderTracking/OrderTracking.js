import { useHistory } from 'react-router-dom'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import './OrderTracking.css'
import arrow from '../../assets/back.png';
import MapView from './MapView';

function OrderTracking() {
    let history = useHistory();

    function handleClick() {
        history.push('/newPicker');
    }
    function handleClic() {
        history.push('/qualify');
    }
    return (
        <>
            <Navbar />
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <div className='conteiner-orderTracking'>
                <div className="tracking">
                    <p className='titleTraking'>Rastreo de Pedidos</p>
                </div>
                <section>
                    <div className="conteiner-map">
                        <MapView />
                    </div>
                </section>
            </div>
            <button className='btnTraking' onClick={handleClic}>Paquete recibido</button>
        </>
    );
}

export default OrderTracking;