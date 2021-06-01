import { useHistory } from 'react-router-dom'
import React from 'react'
import {Link} from 'react-router-dom'
// import {db} from '../../firebase'
import Navbar from '../Navbar/Navbar'
import arrow from '../../assets/back.png';
import '../Profile/PickerProfile.css'

export const PickerProfile = () =>{
    let history = useHistory();

    function handleClick() {
        history.push('/details');
    }
    
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    // const data =  db.collection('orders').doc(id).get();
    // console.log(data.data(),"perfil")
    return (
        <>
        <Navbar/>
        <img onClick={handleClick} src={arrow} className="return" alt="return" />
        <div className="pickerProfile">
            <p>Mis pedidos</p>
            <p>{id}</p>
            <p>{id.cliente}</p>
            <div className="profile">

                <Link to="/newPicker" className="profileLink">Cambiar Picker</Link>
            </div>
            
        </div>
        </>
    )
}
