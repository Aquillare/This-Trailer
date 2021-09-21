import React from 'react';
import "../assets/styles/components/Header.scss"
import UserIcon from "../assets/static/icons8-usuario-masculino-en-circulo-50.png"

//compopnente creaacional , no tendra logica, solo insertara una seccion de html dentro de nuestra construccion

//esta constante posee una funcion flecha con un return implicito.
//en el html cambiamos class por className, si presionamos ctrl + D podemos agrupar todas las coincidencias de una palabra para cambiarlas todas como cambiar class a className.
//tambien debemos añadir un cierre a las etiquetas que no lo poseaan, ej <img />

const Header = () => (
    <header>
    <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="logo platzi video"/>
    <div className="header__menu">
        <div className="header__menu--profile">
            <img src={UserIcon} alt="perfil"/>
        <p>Perfil</p>

        </div>
        
        <ul>
            <li><a href="">Cuenta</a></li>
            <li><a href="">Cerrar sesión</a></li>
        </ul>
    </div>
</header>
);

export default Header;