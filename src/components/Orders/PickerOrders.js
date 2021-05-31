import { useHistory } from 'react-router-dom'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Deliveries from '../Deliveries/Deliveries'
import arrow from '../../assets/back.png';
import '../Deliveries/Deliveries.css';

function PickerOrders() {
    let history = useHistory();

    function handleClick() {
        history.push('/principal');
    }

    
    return (
        <>
            <Navbar />
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <div className='conteiner-pickerorders'>
                <p>Entregas</p>
                    <div className="conteiner-deliveries">
                        <Deliveries />
                    </div>
            </div>
        </>
    );
<<<<<<< HEAD

=======
    
>>>>>>> e43192d (cambios de estilos varios)
}

export default PickerOrders;
