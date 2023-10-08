import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Cart from '../screens/Cart'
import Modal from '../Modal';
import { useCart } from './ContextReducer';
const title = require('../images/image-removebg-preview.png')
const logOut = require('../images/logout.png')
const cartIcon= require('../images/shopping-cart.png')

export default function Navbar() {
  let data = useCart();
  const [cartView, setCartView] = useState(false)

  const handleLogOut = () => {
    localStorage.removeItem("authToken")
  }

  return (
    <div style={{
      backgroundColor: 'dark',
    }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success"
        style={{ background: 'linear-gradient(90deg, #fff 0%, #e9ecef 35%, #e9ecef 100%)' }} >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic fw-bold text-dark" to="/" >
            <img src={title} alt='' style={{
              width: "200px"
            }}></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon' ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-5 text-secondary" aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5 text-secondary" aria-current="page" to="/myOrder">My Orders</Link>
                </li>
                : ""}
            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>
                <Link className="btn bg-white text success mx-1" to="/login">login</Link>
                <Link className="btn bg-white text success mx-1" to="/createUser">signUp</Link>
              </div>
              :
              <div className='d-flex'>
                <div className="btn  text-black " >
                  <img className='mx-1' src={cartIcon} alt='' onClick={() => {setCartView(true)}} style={{
                    width: "25px"
                  }}/>{data.length}
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}><Cart/></Modal> : ""}
                <Link className="btn  text- mx-1" to="/login" onClick={handleLogOut}>
                  <img src={logOut} alt='' style={{
                    width: "25px"
                  }}></img>
                </Link>
              </div>
              //<Link className="btn bg-white  mx-1" to="/createUser">signUp</Link>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
