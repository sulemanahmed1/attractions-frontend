import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    attrations: [],
    error: null,
    loading: true
}

// create context 
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions 
    async function getAttractions() {
        try {
            console.log("1")
            // dev server
            const response = await fetch('https://attraction-env.eba-nmaavmmm.us-east-1.elasticbeanstalk.com/api/companies')
         
            // localt tomcat server 
       //     const response = await fetch('http://localhost:8080/Attractions-0.1/api/companies')
            const data = await response.json();
            console.log("2")
            dispatch({
                type: 'GET_ATTRACTIONS',
                payload: data
            })
            console.log("3")
        } catch (error) {
            console.log("error")
        }
    }
/*
    async function deleteAttraction(id) {
        try {

            console.log("1")
            const response = await fetch(`http://localhost:8080/Attractions-0.1/api/companies/${id}`, {
                method: 'DELETE',
            })
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
            console.log("2")

            console.log("3")
        } catch (error) {
            console.log("error with deleting");
        }
    }
*/
    async function addAttraction(attraction) {
        const config = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(attraction)
        }

        try {
        //Dette er vores dev miljø 
             const response = await fetch('https://attraction-env.eba-nmaavmmm.us-east-1.elasticbeanstalk.com/api/company',config)
        
        // dette er til en lokalt installerede tomcat server 
        //const response = await fetch('http://localhost:8080/Attractions-0.1/api/company',config)
         
       const data = await response.json();
            console.log("added to db")
            console.log(data)
            dispatch({
                type: 'ADD_ATTRACTOION',
                payload: data
            });
            console.log("adding to page")
        } catch (error) {
            console.log("error adding")
        }

    }

    return (<GlobalContext.Provider value={{
        attrations: state.attrations,
        error: state.error,
        loading: state.loading,
        getAttractions,
   //     deleteTransaction,
        addAttraction
    }}>
        {children}
    </GlobalContext.Provider>);
}