import { useHistory } from 'react-router-dom'
import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import arrow from '../../assets/back.png';
import '../Profile/PickerProfile.css'

export const PickerProfile = () =>{
    let history = useHistory();

    function handleClick() {
        history.push('/principal');
    }
    return (
        <>
        <Navbar/>
        <img onClick={handleClick} src={arrow} className="return" alt="return" />
        <div className="pickerProfile">
            <p>Mis pedidos</p>
            <div className="profile">

                <Link to="/newPicker" className="profileLink">Cambiar Picker</Link>
            </div>
            
        </div>
        </>
    )
}
