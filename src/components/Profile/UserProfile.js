import React from 'react';
import Navbar from '../Navbar/Navbar'
import arrow from '../../assets/back.png';
import { Link, useHistory } from 'react-router-dom'


function UserProfile ()  {
    let history = useHistory();

    function handleClick() {
        history.push('/deliveries');
    }
   return (
       <>
       <Navbar />
       <img onClick={handleClick} src={arrow} className="return" alt="return" />
        <div>
        <p>datos del usuario a entregar pedidos</p>
        <Link to="/cancelation" >Cancelar entrega</Link>
        </div>
    </>
   ) 
}
export default UserProfile; 
