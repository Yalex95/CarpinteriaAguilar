import React from 'react';
import { useFetch } from '../hooks/useFetchImages';

export const Footer = () => {
    const {data,loading}=useFetch(`https://web-page-1842d-default-rtdb.firebaseio.com/footer.json`);

    const {facebook}=!!data&& data[0];
    const {giro}=!!data&& data[1];
    const {phone}=!!data&& data[2];
    const urlWhatsApp=`https://api.whatsapp.com/send/?phone=${phone}&text=%C2%A1Hola%21+Me+interesa+uno+de+sus+servicios.&app_absent=0`;
    
    return <>
     {
         loading?(
<div className="alert alert-info text-center">Loading...</div>
      
         ):(
            <footer>
            <div className="container">
      
      <div className="row">
      
          <div className="col-12 text-center ">
              <p className="item-text mb-0">{giro}</p>
              <a href={facebook} target='_blank'  rel="noopener" className='fb-icon'><i className="fa-brands fa-facebook"></i></a>
              <a href={urlWhatsApp} className="whatsapp-icon" target="_blank"  rel="noopener"> <i className="fa-brands fa-whatsapp"></i></a>
              <a  href='#go-top' className="go-top"><i className="fa-solid fa-angle-up"></i></a>
           
          </div>
      
      </div>
      </div>
            </footer>
         )
     }
	

  </>;
};
