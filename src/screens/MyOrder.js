import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        await fetch("http://localhost:5000/api/myOrder", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })
    }
    useEffect(() => {
        fetchMyOrder()
    }, [])
    let order = orderData
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>

                <div className='row mx-5 mb-5 mt-3'>
                    <div className='fw-bold'>
                        {Array.from(order).map(data =>
                            <div>
                                <div className='d-flex'>
                                    {data.order_date}
                                    <div style={{ marginLeft: "75%" }}>
                                   Total price: ₹{data.total_price}/-
                                    </div>
                                </div>
                                <hr />
                                <table className='myTable mb-5'>
                                    <tbody>
                                        <tr className='tdr'>
                                            <th className='tdh'>Name</th>
                                            <th className='tdh'>Quantity</th>
                                            <th className='tdh'>price</th>
                                        </tr>
                                    </tbody>
                                    {data.order_items?.map((item) =>
                                        item.map(obj =>
                                            <tbody>
                                                <tr className='tdr'>
                                                    <td className='tdh'>{obj.name}</td>
                                                    <td className='tdh'>{obj.qty}</td>
                                                    <td className='tdh'>{obj.price}</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                </table>
                            </div>
                        )}
                    </div>
                    {/* <table className='myTable'>
                            <tr className='tdr'>
                                <th className='tdh'>Name</th>
                                <th className='tdh'>Quantity</th>
                                <th className='tdh'>price</th>
                            </tr>
                    {items && items[0]?.map((data, index) =>
                        
                            <tr className=' tdr'>
                                <td className='tdh'>{data.name}</td>
                                <td className='tdh'>{data.qty}</td>
                                <td className='tdh'>{data.price}</td>
                            </tr>
                        

                    )}
                    </table> */}

                </div>
            </div>

            <div>

            </div>
            <Footer />
        </div>
    )
}