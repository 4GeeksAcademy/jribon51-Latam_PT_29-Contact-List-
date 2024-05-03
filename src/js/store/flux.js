const getState = ({ getStore, getActions, setStore }) => {
	const rutaContactos = "https://playground.4geeks.com/contact/agendas/jribon51/contacts"



	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContactos: function getContactos() {

				fetch(rutaContactos)
					.then(response => response.json())
					.then(data => {
						console.log("data", data)
						setStore({ contactos: data.contacts })
					})
					.catch(error =>{
						console.error("Error al traer lista de  contactos:", error);
					} )

			},
			eliminarContacto: (idContacto) => {

				fetch(`${rutaContactos}/${idContacto}`, {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => {
						if (response.status == 204) {
							getActions().getContactos();
						}


					})
					.catch(error =>{
						console.error("Error al eliminar contacto:", error);
					} )
			}
		}
	};
};



export default getState;
