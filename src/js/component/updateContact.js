import { useState, useEffect, useContext } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



const UpdateContact = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()
    console.log(params)

    const rutaContactos = "https://playground.4geeks.com/contact/agendas/jribon51/"
    // const updContact = "https://playground.4geeks.com/contact/agendas/jribon51/contacts/"

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


    function getContactos() {
        console.log("se ejecutó la función");
        fetch(rutaContactos)
            .then(response => response.json())
            .then(data => {
                console.log("resultado data ", data);
                const contact = data.contacts.find(contact => contact.id == (params.idContacto));
                console.log(contact)
                if (contact) {
                    setFullName(contact.name)
                    setEmail(contact.email)
                    setPhone(contact.phone)
                    setAddress(contact.address)
                }

            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        console.log("se ejecuto el useEffect")
        getContactos()

    }, [])




    return (

        <div className="container">
            <h1 className="text-center">Update contact</h1>
            <form className="row g-3 needs-validation" noValidate>
                <div className="d-flex flex-column">

                    <label for="fullName" classname="form-label">Full name</label>
                    <input type="text" id="fullName" classname="p-5" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />

                    <label for="email" classname="form-label">Email</label>
                    <input type="text" id="email" classname="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label for="phone" classname="form-label">Phone</label>
                    <input type="text" id="phone" classname="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <label for="address" classname="form-label">Address</label>
                    <input type="text" id="address" classname="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />

                </div>
            </form>
            <Link to="/">
                <button type="button" class="btn btn btn-primary mt-3 mb-2 w-100" onClick={()=>{actions.actualizarContacto(params,fullName,email,phone,address)}} >save</button>
            </Link>
            <Link to="/">
                <a href="#" style={{ "text-decoration": "none" }}>or get back to contacts</a>
            </Link>
        </div>
    );

}

export default UpdateContact;