import React from 'react';
import { Link ,useParams} from 'react-router-dom';


const Card = () => {
    const params=useParams()
    console.log(params)


    return (
        <div className="card mt-5" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">Título de la tarjeta</h5>
                <p className="card-text">Algo de texto de ejemplo rápido para construir sobre el título de la tarjeta y componer el contenido principal de la tarjeta.</p>
                {/* Usa el componente Link correctamente */}
                <Link to="/">
                    <button className='btn btn-success'>enviar</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;