import React from 'react';
import '../../components/Register/Register.css'
import Logo from '../../LogoPickUp.png'
import {Link} from 'react-router-dom'

export const Register = () => {
    return (
            <div className="register">
            <h1>PickUp PooL</h1>
                    <p>Tu app de entrega de pedidos</p>
                    <img className="logo" src={Logo} alt="logo" />
                <div className="registerDivForm">
                     <h3>REGÍSTRATE</h3>
                        <form className="registerForm"> 
                        <label htmlFor="email">Correo electrónico*</label>
                        <input type="email" className="registerInput" />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="registerInput" />
                        <input type="button" value="UNIRME" className="registerButton" />
                    </form>
                    <Link to="/">X</Link>
                </div>  
            </div>
    )
};