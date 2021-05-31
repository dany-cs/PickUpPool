import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../FormNewPicker/FormNewPicker.css'

export const FormNewPicker = () =>{
    return (
        <>
        <Navbar />
        <div className="newPicker">
        <p>Reasignar Picker</p>
        <form className="formPicker">
            <label htmlFor="text" className="labelOne">Nombre completo:*</label>
            <input className="inputPicker"></input>
            <label htmlFor="text" className="labelTwo">Numero telefónico:*</label>
            <input className="inputPicker"></input>
            <label htmlFor="text" className="labelThree">ID del Pedido:*</label>
            <input className="inputPicker"></input>
            <button className="buttonNewPicker">CONFIRMAR CAMBIO PICKER</button>
        </form>
        </div>
        </>
    )
}
