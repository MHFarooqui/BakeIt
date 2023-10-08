import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Craousal from '../components/Craousal'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

export default function Home() {
  const [items, setItems] = useState([])
  const unSuccessFullToast = () => {
    toast.warning('Please login to add', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }
  
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/fooditems", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.log(err))
  }, [])
  if (items.length === 0) {
    console.log("empty array")
  }
  // it will be later used for search
  let found = items.find(obj => {
    return obj.name === 'chees cake';
  });
  // set found to empty for now
  found = '';
  return (
    <div  >

      <div> <Navbar /> </div>


      <div> <Craousal /> </div>

      <div className='p-5'>
        <div className='col-12 ps-5 card-group'>
          {found !== ""
            ? <Card brand={found} />
            : items.map((list, index) => (
              <Card brand={list} />
            ))}
        </div>
        <div className="ps-5">
          <button className={'btn btn-success text-white ms-3 justify-content-right'} 
            onClick={($event) => {
              $event.stopPropagation(); 
              // eslint-disable-next-line 
              { (localStorage.getItem("authToken")) ? navigate('/additems') : unSuccessFullToast() }
            }}
          >Add Items</button>
          <ToastContainer />
        </div>

      </div>
      <div> <Footer /> </div>

    </div>
  )
}
