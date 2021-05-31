import React from 'react'
import Navbar from '../Navbar/Navbar'
import './OrderTracking.css'
import MapView from './MapView';

function OrderTracking() {
    return (
        <>
            <Navbar />
            <div className='conteiner-orderTracking'>
                <div className="tracking">
                    <h2>Rastreo de Pedidos</h2>
                </div>
                <section>
                    <div className="conteiner-map">
                        <MapView />
                    </div>
                </section>
            </div>
        </>
    );
}

export default OrderTracking;