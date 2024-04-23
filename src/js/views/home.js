import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";




export const Home = () => {
	const [contactos, setContactos] = useState([
		{
			Nombre: "Persona 1",
			Direccion: "Dirección 1",
			Telefono: "123456789",
			Correo: "persona1@example.com"
		},
		{
			Nombre: "Persona 2",
			Direccion: "Dirección 2",
			Telefono: "987654321",
			Correo: "persona2@example.com"
		},
		{
			Nombre: "Persona 3",
			Direccion: "Dirección 3",
			Telefono: "456789123",
			Correo: "persona3@example.com"
		},
		{
			Nombre: "Persona 4",
			Direccion: "Dirección 4",
			Telefono: "789123456",
			Correo: "persona4@example.com"
		}

	]);



	return (
		<div className="container">
			<div className="d-flex mb-2">
				<button type="button" className="btn btn-success ms-auto">Add new contact</button>
			</div>

			{contactos.map((contacto, index) => {
				return (
					<div key={index} className="card mb-3" >
						<div className="row g-0">
							<div className="col-md-4 d-flex justify-content-center">
								<img src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg" className="rounded-circle img-fluid " style={{"height":"200px","width":"300px"}} alt="" />
							</div>
							<div className="col-md-4">
								<div className="card-body">
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-user"></i>
										<h5 className="m-0 p-0 ms-3">{contacto.Nombre}</h5>
									</div>
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-house"></i>
										<h5 className="m-0 p-0 ms-3">{contacto.Direccion}</h5>
									</div>
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-phone"></i>
										<h5 className="m-0 p-0 ms-3">{contacto.Telefono}</h5>
									</div>
									<div className="d-flex align-items-center">
										<i className="fa-solid fa-envelope"></i>
										<h5 className="m-0 p-0 ms-3">{contacto.Correo}</h5>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="d-flex justify-content-end">
									<i className="p-4 fa-regular fa-pen-to-square"></i>
									<i className="p-4 fa-solid fa-trash"></i>
								</div>
							</div>
						</div>
					</div>

				)
			})}


		</div>
	);
}
