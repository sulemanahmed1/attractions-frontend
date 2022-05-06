import React, { useContext, useEffect } from 'react'
import { Attraction } from './Attraction';
import { GlobalContext } from '../context/GlobalState';

export const AttractionList = () => {
    const { attractions, getAttractions } = useContext(GlobalContext);
  
    useEffect(() => {
      getAttractions();
      
    }, [])
  console.log(attractions);
    return (
      <>
        <h3>History</h3>
    
      </>
    )
  }
  