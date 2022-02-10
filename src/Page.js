import React from 'react'
import { AcercaDe } from './components/AcercaDe';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import Grid from './components/Grid';
import Portada from './components/Portada';


const Page = () => {
   return (
       <div className='container-fluid'>
      
     
         <Portada/>
         <div className='row ml-5 mr-5'>
         <AcercaDe/>
          <Grid/>
         </div>
          <Contacto/>
          <Footer/>
       </div>
        
    )
}

export default Page
