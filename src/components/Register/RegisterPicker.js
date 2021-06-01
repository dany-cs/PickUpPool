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
    const[phone, setPhone] = useState('');
    // console.log(props.user.uid);
    
    const registerPick = async (e) =>{
        e.preventDefault();
        const newPicker = {
            name : name,
            ine: ine,
            placas: placas,
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
            <h2 className='titlePicker'>REGISTRATE COMO PICKER</h2>
                <div className="registerDivFormP">
                    <form className="registerPickerForm" > 
                        <label>{props.user.email}</label>
                        <label htmlFor="name">Nombre completo*</label>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="registerPickerInput" />
                        <label htmlFor="key">Clave Electoral*</label>
                        <input value={ine} onChange={(e) => {setIne(e.target.value)}} type="text" className="registerPickerInput" />
                        <label htmlFor="key">No. de placas*</label>
                        <input value={placas} onChange={(e) => {setPlacas(e.target.value)}} type="text" className="registerPickerInput" />
                        <div className="radioButtom">
                            <div className="radioButtomOne">
                                <input type="radio" name="bicicleta"/>Bicicleta
                                <input type="radio" name="automovil"/>Automóvil
                            </div>
                            <div className="radioButtomTwo">
                                <input type="radio" name="motocicleta"/>Motocicleta
                                <input type="radio" name="caminando"/>Caminando
                            </div>
                        </div>
                        <label htmlFor="telephone">Teléfono*</label>
                        <input value={phone} onChange={(e) => {setPhone(e.target.value)}} type="number" className="registerPickerInput" />
                        <button onClick={registerPick} value="regPicker" className="registerPickerButton" >Unirme</button>
                    </form>
                    </div>
        </div>
    );
}
