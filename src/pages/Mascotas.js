import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mascotas = () => {

    const navigate = useNavigate();

    const ir_modulo_home = () => {
        navigate('/home');
    };

    
    const ir_modulo_productos = () => {
        navigate('/productos');
      };
    

    return (
        <div>
            <br></br>
            <br></br>
            <div className="container">

                <h1 className="text-center">Bienvenido al módulo de Mascotas</h1>

                <br></br>
                <br></br>

                <button className="btn btn-danger" onClick={ir_modulo_home}>
                    Home
                </button>
                <br></br>
                <br></br>

                <button className="btn btn-success" onClick={ir_modulo_productos}>
                Productos
                </button>
            </div>
        </div>
    );
};

export default Mascotas;
