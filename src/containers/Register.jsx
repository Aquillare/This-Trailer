import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import { registerRequest } from '../actions';
import { connect } from 'react-redux';
import Header from '../components/Header';

const Register = props =>{ 
    
    const [form, setValues] = useState({
        name:'',
        email:'',
        password:'',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();  
        props.registerRequest(form);
        props.history.push('/');
    }

    return(
        <>
        <Header isRegister/>
            <section className="registro">
                <section className="registro__container">
                    <h2>Regístrate</h2>
                    <form className="registro__container--form" onSubmit={handleSubmit}>
                        <input onChange={handleInput}
                            name="name" 
                            className="input-register" 
                            type="text" 
                            placeholder="Nombre"
                        />
                        <input onChange={handleInput}
                            name="email" 
                            className="input-register" 
                            type="text" 
                            placeholder="Correo"
                        />
                        <input onChange={handleInput}
                            name="password" 
                            className="input-register" 
                            type="password" 
                            placeholder="Contraseña"
                        />
                        <button className="button">Registrarme</button>
                    </form>
                    <div className=" registro__container--iniciar-sesion">
                        <p>
                            <Link to="/login">
                                Iniciar sesión
                            </Link>
                        </p>
                    </div>
                </section>
            </section>
        </>
    );
    
};

const mapDispatchToProps = {
    registerRequest,
}


export default connect(null,mapDispatchToProps)(Register);