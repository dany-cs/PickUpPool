import React, { useState } from 'react';
import { db } from '../../firebase';
import './PickerCancel.css'
import Navbar from '../Navbar/Navbar'

export const PickerCancel = () =>{

    const[commit, setCommit] = useState('');
    const commitCancelation = async (e) =>{
        const newCancelation = {
           commit: commit
        };
        try{
            await db.collection('pickerCancelation').add(newCancelation);
            console.log('Comentario de cancelación exitoso');
        }
        catch(error){
            console.log('No exitoso', error)
        }
    };
    return(
        <>
            <Navbar />
            <div className="cancelContainer">
                <p className="titleCancel">¿Por qué estás cancelando la entrega?</p>
                <div className="buttonCancel">
                    <div className="prueba">
                        <button className="firstButton">La tienda no lo tiene en existencia</button>
                        <button className="secondButton">No se actualizaron los datos del nuevo picker</button>
                        <button className="thirdButton">Otro</button>
                        <p>Comentario:</p>
                        <textarea type="text" value={commit} onChange={(e) => { setCommit(e.target.value)}} placeholder="Coloca tus comentarios aquí....."></textarea>
                        <button className="enviar" onClick={commitCancelation}>Enviar Cancelación</button>
                    </div>
                </div>
            </div>
        </>
    )
}
