import React from 'react'

const Navbar = () => {
return(
    <>
       
    <div className="container-fluid nav_bg">
        <div className='row'>
          <div className="col-10 mx-auto">       
          </div>
        </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><b>Bazar.Com</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ml-2 ml-lg-0">
           
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/service">Service</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>

      </ul>
      
    </div>
  </div>
</nav>


    </>

);

};

export default Navbar;

