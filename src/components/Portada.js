import React from "react";
import { useFetch } from "../hooks/useFetchImages";
import { Menu } from "./Nav";

const Portada = () => {
 
  //custom hook
  const { data, loading } = useFetch(
    `https://web-page-1842d-default-rtdb.firebaseio.com/secc1.json`
  );
    
  const { email } = !!data && data[0];
  const { img } = !!data && data[1];
  const { phone } = !!data && data[2];
  const { subtitle } = !!data && data[3];
  const { title } = !!data && data[4];
  

  const style = {
    background: `url(${img})`,
  };
  return (
    <>
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div className="contenedor row justify-content-center" id='go-top' style={style}>
          <div className="opacity-container container-fluid text-center">
          <div className="row menu-content ml-4 ">
           
           <Menu phone={phone} email={email} />
           
          </div>
            
            <div className="row justify-content-center">
                <div className="container">
                    <p className="sub">{subtitle}</p>
                    <p className="title bodoni-title text-right">{title}</p>
                    
                </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Portada;
