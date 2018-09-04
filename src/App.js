import React, { Component } from 'react';
// import axios from 'axios';
class app extends Component{
render () {
  return (
    <div className="navbar fixed-top navbar-expand-sm navbar-dark" style={{backgroundColor: "#006600"}}>
     <a className="navbar-brand" href=""> 
            <img alt="" src="./IMG/SmartPrice-Logosss.png" className="rounded-circle" style={{width: "50px", height: "50px"}}/>
     </a>
     <button className="navbar-toggler" data-toggle="collapse" data-target="#mpret">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mpret">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="" className="nav-link">Beranda</a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">Galeri</a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">Tentang</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle d-none d-md-block" data-toggle="dropdown">
              Kategori
            </a>
            <div className="dropdown-menu">
              <a href="" className="dropdown-item">Perlengkapan Gaming</a>
              <a href="" className="dropdown-item">Voucher Game</a>
              <a href="" className="dropdown-item">Joki Game</a>
            </div>       
          </li>
        </ul>
        <input class="d-none d-md-block form-control" type="search" placeholder="Cari produk atau toko"style={{width:"50%"}}/>
          <button class="d-none d-md-block btn mx-2" style={{backgroundColor:"#ff471a"}}>Cari</button>
          <button class="d-none d-md-block btn btn-success mx-1 ml-auto" style={{backgroundColor:"#333300"}}>
                  Bantuan 
              </button>
          <button class="btn btn-success mx-1" style={{backgroundColor:"#333300"}}>
            Daftar 
          </button>
          <button class="btn btn-success my-2 ml-1" style={{float:"none", margin:"0 auto", display: "block", textAlign:"center", backgroundColor:"#333300"}}>
            Masuk 
          </button>

      </div>
    
    </div>
    
  )
}
}
export default app;