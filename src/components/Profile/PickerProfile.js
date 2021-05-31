import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import '../Profile/PickerProfile.css'

export const PickerProfile = () =>{
    return (
        <>
        <Navbar/>
        <div className="pickerProfile">
            <p>Mis pedidos</p>
            <div className="profile">
                
                <Link to="/newPicker" className="profileLink">Cambiar Picker</Link>
            </div>
            
        </div>
        </>
    )
}