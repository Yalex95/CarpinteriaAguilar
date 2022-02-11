import React from 'react';

export const Menu = ({phone,email}) => {
  

  return <>
   <nav className='navbar navbar-expand-lg bg-transparent'>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="fa-solid fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link " href="#acerca">
                        ACERCA DE 
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#productos">
                        PRODUCTOS
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#contacto">
                        CONTACTO
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </nav>
                  <div className='col text-right'>
                  <a className="phone-text mr-3" onClick={() => window.location = `tel:${phone}`}>
                        {phone}
                      </a>
                      <a className="phone-text" onClick={() => window.location = `mailto:${email}`}>
                        {email}
                      </a>
                  </div>
  </>;
};
