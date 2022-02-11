import React from 'react';
import { useFetch } from '../hooks/useFetchImages';

export const Contacto = () => {
    const { data, loading } = useFetch(
        `https://web-page-1842d-default-rtdb.firebaseio.com/secc3.json`
      );

      const { dias } = !!data && data[0];
      const { direccion } = !!data && data[1];
      const { email} = !!data && data[2];
      const { horario} = !!data && data[3];
      const {img}= !!data && data[4];
      const {phone}= !!data && data[5];
      
    const style = {
        background: `url(${img})`,
      };

  return <>
  {
    loading?(
      <div className="alert alert-info text-center">Loading...</div>
      
    ):(
      <div className='row mt-5 mb-5  pt-5 pb-5 contenedor ' id='contacto' style={style}>
      <div className='container '>
      <div className='row '>
      <div className='col-4 mr-3 '>
          <div className='map-content'>
          <iframe title='mapa' src="https://maps.google.com/maps?q=15.8959063,-92.256151&z=14&output=embed&iwloc=0" width="500" height="330" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

          </div>
     
      </div>
      <div className='col text-left pl-3'>
        <p className='bodoni-txt-title mb-0 '>{direccion}</p>
        <p className='item-text mb-0 link' onClick={() => window.location = `tel:${phone}`}>{phone}</p>
        <p className='item-text link' onClick={() => window.location = `mailto:${email}`}>{email}</p>
        <p className='item-text mb-0'>Horario:</p>
        <p className='item-text mb-0'>{horario}</p>
        <p className='item-text'>{dias}</p>
      </div>

      </div>
  
  
  </div>

  </div>
    )
  }
  </>
};
