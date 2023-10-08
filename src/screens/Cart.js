import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
const sound = require('../audio/cancel-36118.mp3')
const trash = require('../images/trash-can.png')
export default function Cart() {
    let data = useCart();
    function play() {
        new Audio(sound).play()
    }
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
            </div>
        )
    }
    
    let totalPrice = data.reduce((total, food) => total + parseInt(food.price), 0)
    
    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        // console.log(data,localStorage.getItem("userEmail"),new Date())
        let response = await fetch("http://localhost:5000/api/orderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                total_price: totalPrice,
                order_date: new Date().toDateString()
            })
        });
        console.log("JSON RESPONSE:::::", response.status)
        if (response.status === 200) {
            dispatch({ type: "DROP" })
        }
    }

    return (
        <div>
            <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
                <table className='table table-hover '>
                    <thead className=' text-dark fs-4'>
                        <tr>
                            <th scope='col' >#</th>
                            <th scope='col' >Name</th>
                            <th scope='col' >Quantity</th>
                            <th scope='col' >Amount</th>
                            <th scope='col' ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((food, index) => (
                            <tr>
                                <th scope='row' >{index + 1}</th>
                                <td >{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.price}</td>
                                <td ><button type="button" className="btn p-0"><img src={trash} alt='' style={{
                                    width: "17px"
                                }} onClick={() => {dispatch({type: "REMOVE", index: index}); play()}}/></button> </td></tr>
                        ))}
                    </tbody>
                </table>
                <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
                <div>
                    <button className='btn bg-dark text-white mt-5 ' onClick={handleCheckOut} > Check Out </button>
                </div>
            </div>



        </div>
    )
}