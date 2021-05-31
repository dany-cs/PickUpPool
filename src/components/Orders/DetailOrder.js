import { useHistory } from 'react-router-dom'
import './DetailOrder.css';
import Navbar from '../Navbar/Navbar'
<<<<<<< HEAD
// import { useHistory } from 'react-router-dom'
import OneOrder from './OneOrder'

const DetailOrder =()=>{
    
    // let history = useHistory();

    // function handleClick() {
    //     history.push('/orders');        
    // }
=======
import swal from 'sweetalert2-react';
import arrow from '../../assets/back.png';



const DetailOrder =()=>{

    let history = useHistory();

    function handleClick() {
        history.push('/orders');
    }

    function handleClic() {
        history.push('/pickerProfile');
    }

    const alertSuccess =()=>{
        swal('Pedido programado','¡La información de tu entrega ha sido guardada exitosamente!', 'success');
    }
>>>>>>> 4d1d4fc42302389ad3e0ead0248a7bb0599ca3bc

    return(
        <div className='viewPrincipal'>
            <Navbar/>
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <div className='conteiner-userorders'>
                <div className="my-orders">
                    <p>Mis pedidos</p>
                </div>
                <section>   
                    <form className="container-orders" onSubmit={()=>alertSuccess()}>
                        <div className='hours'>
                            <p>Hora de entrega:</p>
                            <select required>
                                <option></option>
                                <option >10:00</option>
                                <option >10:30</option>
                                <option >11:00</option>
                                <option >11:30</option>
                                <option >12:00</option>
                                <option >12:30</option>
                                <option >13:00</option>
                                <option >13:30</option>
                                <option >14:00</option>
                                <option >14:30</option>
                                <option >15:00</option>
                                <option >15:30</option>
                                <option >16:00</option>
                                <option >16:30</option>
                                <option >17:00</option>
                                <option >17:30</option>
                                <option >18:00</option>
                                <option >18:30</option>
                                <option >19:00</option>
                            </select>
                        </div>
                        <div className='delivery-point'>
                            <p>Punto de entrega:</p>
                            <select required>
                                <option></option>
                                <option >Ángel de la Independencia</option>
                                <option >Hemiciclo a Benito Juárez</option>
                                <option >Palacio de Bellas Artes</option>
                                <option >Palacio de Correos</option>
                                <option >Plaza Garibaldi</option>
                                <option >Monumento a la Revolución</option>
                                <option >Templo Mayor</option>
                                <option >Torre Latino</option>
                                <option >Zócalo</option>
                            </select>
                        </div>
                        <div className='confirm'>
                            <input type="submit" value="Confirmar Pickeo" onClick={handleClic} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default DetailOrder;
