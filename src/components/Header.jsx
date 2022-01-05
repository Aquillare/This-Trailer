import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'; 
import gravatar from '../utils/gravatar';
import "../assets/styles/components/Header.scss";
import UserIcon from "../assets/static/icons8-usuario-masculino-en-circulo-50.png";
import logoVideo from '../assets/static/logoVideo.png'
import { logoutRequest } from '../actions';
import PropTypes from 'prop-types';
import classNames from 'classnames';



//compopnente creaacional , no tendra logica, solo insertara una seccion de html dentro de nuestra construccion

//esta constante posee una funcion flecha con un return implicito.
//en el html cambiamos class por className, si presionamos ctrl + D podemos agrupar todas las coincidencias de una palabra para cambiarlas todas como cambiar class a className.
//tambien debemos añadir un cierre a las etiquetas que no lo poseaan, ej <img />

const Header = (props) => {
    const {user, isLogin , isRegister, lenguageUS} = props;   //destructuramos user de props, para poder usar user, en vez de props.user, tambien agregamos isLogin e isRegister para trabajar con el cambio de los stilos del header.
    const hasUser = Object.keys(user).length > 0;  //cone esta validacion cimprovamos si user posee un usuario.

    const handleLogout = () => {
       props.logoutRequest({});
    };

    const headerClass = classNames('header',{
        isLogin,
        isRegister,
    });

    return(
        <header className={headerClass}>

            <Link  to="/">
            <div className='headerLogo_container'>
                <img className="header__img" src={logoVideo} alt="logo video"/>
                <p className='header_title'>This Trailer</p>
            </div>
            </Link>
            


            <div className="header__menu">
                <div className="header__menu--profile">

                    {hasUser ? 
                        <img src={gravatar(user.email)} alt={user.email}/>
                        :
                        <img src={UserIcon} alt="perfil"/>
                    }    
                    
                <p>Perfil</p>

                </div>
                
                <ul>
                    {hasUser ? 
                         <li><a href="">{user.name}</a></li>
                         :
                         null
                    }
                   
                    {hasUser ?
                        <li>
                            <a href="#logout" onClick={handleLogout}>Cerrar Sesion</a>    
                        </li>
                        :
                         <li>
                         <Link to="/login"> 
                             Iniciar sesión
                         </Link>
                        </li>
                    }
                   
                </ul>
            </div>
        </header>
    );
};


Header.propTypes = {
    user: PropTypes.object,
}

const mapStateToProps =  state => {
    return{
        user: state.user,
    };
};


const mapDispatchToProps = {
    logoutRequest,
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);