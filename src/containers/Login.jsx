import React , {useState} from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest} from '../actions';  
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';
import Header from "../components/Header";


const Login = (props) => {

    const [form, setValues] = useState({
        email:'',

    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value        //de esta forma obtenemos de manera dinamica los datos de input.
        });
    };
 
    const handleSubmit = event => {          //esta funcion se encargara de tomar la informacion del formulario para presentarla donde sea necesario.
        event.preventDefault();            //no queremos que se cumpla el formato que normalmente tien html para manejar eventos dentro de un formulario por lo que usamos event.preventDefault()
        props.loginRequest(form);
        props.history.push('/')     //si ha cumplido con los requisitos para el login lo enviaremos al home, esto gracias al metodo push del valor history, este valor lo obtenemos de las props, esta disponible porque estamos encapusalndo nuestra apliacion el browserRouter.
    }

    return(
    
     <>
        <Header isLogin/>   
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form">

                    <input 
                        name="email" 
                        className="input-login" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />

                    <input
                        name="password"
                        className="input-login"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button" onClick={handleSubmit}>Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" name="" id="cbox1" value="checkbox"/>Recuerdame
                        </label>
                        <a href="">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} alt="Google"/>Inicia sesión con Google</div>
                    <div><img src={twitterIcon} alt="Twitter"/>Inicia sesión con Twitter</div>

                </section>
                <p className="login__container--register">No tienes niguna cuenta <Link to="/register">Regístrate</Link></p>
            </section>
        </section>
    </>
  );
}

const mapDispatchToProps = {
    loginRequest,    
}

export default connect(null,mapDispatchToProps)(Login);