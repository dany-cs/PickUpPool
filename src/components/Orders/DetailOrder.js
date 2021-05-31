import './DetailOrder.css';
import Navbar from '../Navbar/Navbar'
import { useHistory } from 'react-router-dom'
import OneOrder from './OneOrder'


const DetailOrder =()=>{
    
    let history = useHistory();

    function handleClick() {
        history.push('/pickerProfile');        
    }
    return(
        <div className='viewPrincipal'>
            <Navbar/>
            <div className='conteiner-userorders'>
                <div className="my-orders">
                    <h2>Mis pedidos</h2>
                </div>
                <section>
                    <div className="conteiner-orders selector">
                        <div>
                            <OneOrder />
                        </div>
                        <div className='hours'>
                            <p>Hora de entrega:</p>
                            <select>
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
                            <select>
                                <option></option>
                                <option >Ángel de la Independencia</option>
                                <option >Monumento a la Raza</option>
                                <option >Zócalo</option>
                                <option >Plaza Garibaldi</option>
                                <option >Templo Mayor</option>
                                <option >Plaza de las Tres Culturas</option>
                                <option >Monumento a la Revolución</option>
                                <option >Torre Latino</option>
                                <option >Hemiciclo a Benito Juárez</option>
                                <option >Kiosco Morisco</option>
                                <option >Palacio de Bellas Artes</option>
                                <option >Palacio de Correos</option>
                            </select>
                        </div>
                        <div className='confirm'>
                            <button onClick={handleClick}>Confirmar Pickeo</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DetailOrder;
