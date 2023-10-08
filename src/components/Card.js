import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart, useDispatchCart } from './ContextReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const sound = require('../audio/beep-6-96243.mp3')

export default function Card(props) {
    let data = useCart();
    const successToast = () => {
         new Audio(sound).play();
         toast.success(`${data.length + 1} Item added`, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
    const unSuccessFullToast = () => {
        new Audio(sound).play();
        toast.warning('Please login to add', {
           position: toast.POSITION.BOTTOM_RIGHT
       });
   }

    let dispatch = useDispatchCart();
    const [isOpen, setIsOpen] = useState(false)
    const [qty, setQty] = useState(1)

    const handleAddToCart = async () => {
        await dispatch({ type: "ADD", id: props.brand._id, name: props.brand.name, price: finalPrice, qty: qty })
    }
    let finalPrice = qty * parseInt(props.brand.price)
    return (
        <div >
            <motion.div transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                onClick={($event) => { $event.stopPropagation(); setIsOpen(!isOpen) }}
                className="card text-dark m-3 mb-5"
                style={{
                    "width": "18rem", "maxHeight": "500px", backgroundColor: "white",
                    boxShadow: '0px 10px 30px rgba(0,0,0, 0.2)'
                }}>
                <motion.img layout='position' src={props.brand.img} className="card-img-top" alt="..."
                    style={{
                        "width": "100%",
                        "height": "200px",
                        "borderRadius": "1rem"
                    }} />
                <div className="card-body text-dark">
                    <motion.h3 layout="position" className="card-title">{props.brand.name}</motion.h3>
                    {isOpen &&
                        <motion.div className='expand'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}>
                            <p className="card-text">{props.brand.descrpition}</p>
                            <div className='container w-100 '>
                                <select className='m-2 h-100 fs-6 bg-success rounded text-white'
                                    onClick={($event) => { $event.stopPropagation(); }} onChange={(e) => setQty(e.target.value)}>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option Key={i + 1} value={i + 1}> {i + 1} </option>
                                        )
                                    })}
                                </select>

                                <div className='d-inline h-100  '> {finalPrice} </div>
                            </div>
                            <hr className='w-100'></hr>
                            <div className='align-right px-2 '>
                                <button className={'btn btn-light text-white ms-2 justify-content-right  '} style={{ backgroundColor: "#212529" }}
                                    onClick={($event) => {
                                        $event.stopPropagation();  
                                        // eslint-disable-next-line 
                                        { (localStorage.getItem("authToken")) ?  successToast() : unSuccessFullToast() }
                                        // eslint-disable-next-line 
                                        { (localStorage.getItem("authToken")) ?  handleAddToCart() : console.log('user is not logged in') }
                                    }}
                                >Add to cart</button>
                                <ToastContainer />
                            </div>
                        </motion.div>
                    }
                </div>
            </motion.div>
        </div>
    )
}
