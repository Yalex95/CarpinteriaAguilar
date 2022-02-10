import React from 'react';
import { useFetch} from '../hooks/useFetchImages';

export const AcercaDe = () => {
    const {data,loading}=useFetch(`https://web-page-1842d-default-rtdb.firebaseio.com/secc2.json`);
    const {desc}=!!data&& data[0];
    const {titulo}=!!data&& data[1];

  return<>
  {
    loading?(
      <div className="alert alert-info text-center">Loading...</div>
      
    ):(
      <div className='container-fluid mt-5 mb-5' id='acerca'>
      <h1 className='bodoni-txt-title mb-3 mt-3'>{titulo}</h1>
      <h2 className='bodoni-text'>
      <div dangerouslySetInnerHTML={{__html: desc}} />
      </h2>
  
  
    </div>
    )
  }
  
  </>
  ;
};
