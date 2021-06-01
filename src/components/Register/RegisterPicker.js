import React, { useState} from 'react';
import { db } from '../../firebase';
import './RegisterPicker.css'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'

export const RegisterPicker = (props) => {

    let history = useHistory();

    const[name, setName] = useState('');
    const[ine, setIne] = useState('');
    const[placas, setPlacas] = useState('');
    const[transport, setTransport] = useState('');
    const[phone, setPhone] = useState('');
    // console.log(props.user.uid);
    
    const registerPick = async (e) =>{
        e.preventDefault();
        const newPicker = {
            name : name,
            ine: ine,
            placas: placas,
            transport: transport,
            phone: phone, 
        };
        try{
            await db.collection('pickerInformation').add(newPicker);
            swal('¡Tu registro se ha realizado de manera exitosa!','¡Nuevo picker!', 'success');
            history.push('/pickerProfile');
            console.log('Datos guardados exitosamente');
        }
        catch(error){
            console.log('Datos no guardados', error)
        }
    };

    return(
        <div className="registerPicker">
            <h1 className='titlePicker'>REGISTRATE COMO PICKER</h1>
                <div className="registerDivFormP">
                    <form className="registerPickerForm" > 
                        <label>{props.user.email}</label>
                        <label htmlFor="name">Nombre completo*</label>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="registerPickerInput" />
                        <label htmlFor="key">Clave Electoral*</label>
                        <input value={ine} onChange={(e) => {setIne(e.target.value)}} type="text" className="registerPickerInput" />
                        <label htmlFor="key">No. de placas*</label>
                        <input value={placas} onChange={(e) => {setPlacas(e.target.value)}} type="text" className="registerPickerInput" />
                        <select className="radioButtom" value={transport} onChange={(e) => {setTransport(e.target.value)}} required>
                            {/* <div className="radioButtomOne"> */}
                                <option  type="radio" name="bicicleta">Bicicleta</option>
                                <option type="radio" name="automovil" >Automóvil</option>
                            {/* </div>j
                            <div className="radioButtomTwo"> */}
                                <option  type="radio" name="motocicleta">Motocicleta</option>
                                <option type="radio" name="caminando">Caminando</option>
                            {/* </div> */}
                        </select>
                        <label htmlFor="telephone">Teléfono*</label>
                        <input value={phone} onChange={(e) => {setPhone(e.target.value)}} type="number" className="registerPickerInput" />
                        <button onClick={registerPick} value="regPicker" className="registerPickerButton" >UNIRME</button>
                    </form>
                    </div>
        </div>
    );
}