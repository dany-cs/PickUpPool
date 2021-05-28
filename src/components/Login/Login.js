import React from 'react';
import '../../components/Login/Login.css'
import Logo from '../../LogoPickUp.png'
import {Link} from 'react-router-dom'
export const Login = () => {
    return (
            <div className="login">
            <h1>PickUp PooL</h1>
                    <p>Tu app de entrega de pedidos</p>
                    <img className="logo" src={Logo} alt="logo" />
                <div className="loginDivForm">
                     <h3>INICIA SESIÓN</h3>
                        <form className="loginForm"> 
                        <label htmlFor="email">Correo electrónico*</label>
                        <input type="email" className="loginInput" />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="loginInput" />
                        <input type="button" value="Ingresar" className="loginButton" />
                    </form>
                    <p>¿Aún no tienes cuenta?</p>
                    <Link to="/register" className="registerLink">Registrate</Link>
                </div>  
            </div>
    )
};