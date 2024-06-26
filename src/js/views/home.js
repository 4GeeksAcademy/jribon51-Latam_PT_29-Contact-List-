import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import "../../styles/home.css";
import { Context } from "../store/appContext";




export const Home = () => {

	const { store, actions } = useContext(Context);
	console.log(useContext(Context))



	return (
		<div className="container">
			<div className="d-flex mb-2">
				<Link to="/addContact" className="ms-auto">
					<button type="button" className="btn btn-success ms-auto">Add new contact</button>
				</Link>

			</div>
			{store.contactos.map((contacto, index) => {
				return (
					<div key={index} className="card mb-3" >
						<div className="row g-0">
							<div className="col-md-4 d-flex justify-content-center">
								<img src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg" className="rounded-circle img-fluid " style={{ "height": "200px", "width": "300px" }} alt="" />
							</div>
							<div className="col-md-4">
								<div className="card-body">
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-user"></i>
										<h5 className="m-0 p-0 ms-3">{contacto.name}</h5>
									</div>
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-house"></i>
										<h5 className="m-0 p-0 ms-3">{contacto.address}</h5>
									</div>
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-phone"></i>
										<h5 className="m-0 p-0 ms-3">{contacto.phone}</h5>
									</div>
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-envelope"></i>
										<h5 className="m-0 p-0 ms-3">{contacto.email}</h5>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="d-flex justify-content-end">
									<Link to={`/updateContact/${contacto.id}`}>
										<button className="btn">
											<i className="p-4 fa-regular fa-pen-to-square"></i>
										</button>
									</Link>
									<button onClick={() => actions.eliminarContacto(contacto.id)} className="btn">
										<i className="p-4 fa-solid fa-trash" ></i>
									</button>

								</div>
							</div>
						</div>
					</div>

				)
			})}


		</div>

	);
}
