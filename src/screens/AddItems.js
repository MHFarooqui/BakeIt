import React, { useState } from 'react'
import Navbar from '../components/Navbar';

export default function AddItems() {
    const [credentials, setCredentials] = useState({ name: "", price: "", img: "", descrpition: "" })

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/additems", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, img: credentials.img, price: credentials.price, descrpition: credentials.descrpition })
  
      });
      const json = await response.json()
      console.log(json);
      if (json.success) {
        alert("addedd successfully")
      }
      else {
        alert("some error accord")
      }
    }
  
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  return (
    <div style={{ backgroundImage: 'url("https://i.pinimg.com/originals/7d/c2/05/7dc2059d41b19f2caa2b1c97fd955f3c.jpg")', backgroundSize: 'cover', height: '100vh', 
}}>
 <div>
   <Navbar />
 </div>

 <div className='container text-white w-50'>

   <form className='w-50 m-auto mt-5 border border-dark rounded form-box ' onSubmit={handleSubmit}>
     <div className="m-3">
       <label  className="form-label" autoComplete="off" >Name</label>
       <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}  />
     </div>
     <div className="m-3">
       <label className="form-label" >image url</label>
       <input type="text" className="form-control" name='img' value={credentials.img} onChange={onChange}  />
     </div>
     <div className="m-3">
       <label className="form-label">description</label>
       <input type="text" className="form-control" name='descrpition' value={credentials.descrpition} onChange={onChange}  />
     </div>
     <div className="m-3">
       <label  className="form-label">price</label>
       <input type="text" className="form-control" value={credentials.price} onChange={onChange} name='price' />
     </div>
     <button type="submit" className="m-3 btn btn-success">Submit</button>
   </form>

 </div>

</div>
  )
}
