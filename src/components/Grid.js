import React from 'react'
import DataItems from './DataItems';
import { useFetchItems } from '../hooks/useFetchItems';
const Grid = () => {
    //custom hook
    const {data,loading}=useFetchItems();
    
  
        
    return (
        <div className='container-fluid mb-5' id='productos'>
            <h1 className='bodoni-text mb-5'>Catalogo de productos</h1>
            {
            
            loading? 'cargando..':''}
            <div className='card-grid justify-content-center'>
            {data.map(item=>(
                 <DataItems 
                 key={item.nombre}
                 {...item}/>
               
            ))}
            </div>
        </div>
    )
}

export default Grid
