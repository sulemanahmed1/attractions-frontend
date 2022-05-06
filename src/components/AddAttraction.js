import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddAttraction = () => {
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [streetnr, setStreetnr] = useState("");
    const [city, setCity] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");

    //   const [message, setMessage] = useState("");

    const { addAttraction } = useContext(GlobalContext);
    /*
      const json = {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        street: street,
        streetnr: streetnr,
        city: city,
        postalcode: postalcode,
        category: category
    }
    */
    const onSubmit = e => {
        console.log("fire form")
        e.preventDefault();

        const newAttraction = {
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            street: street,
            streetnr: streetnr,
            city: city,
            postalcode: postalcode,
            category: category

        }

        addAttraction(newAttraction);
        console.log(newAttraction);
    }
    return (
        <>

            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    value={street}
                    placeholder="street"
                    onChange={(e) => setStreet(e.target.value)}
                />


                <input
                    type="number"
                    value={streetnr}
                    placeholder="streetnr"
                    onChange={(e) => setStreetnr(e.target.value)}
                />


                <input
                    type="text"
                    value={city}
                    placeholder="city"
                    onChange={(e) => setCity(e.target.value)}
                />


                <input
                    type="number"
                    value={postalcode}
                    placeholder="postalcode"
                    onChange={(e) => setPostalcode(e.target.value)}
                />



                <input
                    type="number"
                    value={mobileNumber}
                    placeholder="Mobile Number"
                    onChange={(e) => setMobileNumber(e.target.value)}
                />
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={category}
                    placeholder="category"
                    onChange={(e) => setCategory(e.target.value)}
                />

                <button type="submit">Create</button>

            </form>

        </>
    )
}