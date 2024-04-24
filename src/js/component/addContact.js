import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";



const AddContact = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


    const addContact = "https://playground.4geeks.com/contact/agendas/jribon51/contacts"

    const contacto = {
        "name": fullName,
        "phone": phone,
        "email": email,
        "address": address
    }


    function agregarContacto(contacto) {



        fetch(addContact,
            {
                method: "POST",
                body: JSON.stringify(contacto),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(data => data)
            .catch(error => error)
    }



    return (

        <div className="container">
            <h1 className="text-center">Add new contact</h1>
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
            <button type="button" class="btn btn btn-primary mt-3 mb-2 w-100" onClick={agregarContacto(contacto)}>save</button>
            <Link to="/">
                <a href="#" style={{ "text-decoration": "none" }}>or get back to contacts</a>
            </Link>
        </div>
    );

}

export default AddContact;