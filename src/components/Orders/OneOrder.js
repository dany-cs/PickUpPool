import React, {useEffect, useState } from 'react'
import { db,collectionOrders } from '../../firebase'
import './UserOrders.css'
import { useHistory } from 'react-router-dom'

function OneOrder() {
    const [createN, setCreate] = useState([]);
    // const [selectedOrder, setSelectedOrder] = useState(null);
    let history = useHistory();

    function handleClick() {
        history.push('/details');
    }

    useEffect(() => {
        const getNotes = async () => {
            const { docs } = await collectionOrders()
            const newArray = docs.map((item) => ({ id: item.id, ...item.data() }))
            setCreate(newArray)
        }
        getNotes()
    }, []);

    const orderId = async (id) => {
        try{
            const data = await db.collection('orders').doc(id).get();
            console.log(data.data())
        } catch (e){
            console.log(e,"no existen datos")
        }
        
    }

    return (
        <>
            <div onClick={handleClick} className="ordersDad">
            {
                createN.length !== 0 ? (
                    createN.map((item) => (
                        
                        <li className="ordersBoy" key={item.id}>
                            <p>Id: {item.numOrden}</p>
                            <p>Fecha de entrega: {item.entrega}</p>
                            <button  onClick={(id)=>{orderId(item.id)}}>detalles</button>
                        </li>     
                    ))
                    ) : (
                        <span>No existen ordenes</span>
                        )
            }
             </div> 
        </>
    );
}

export default OneOrder;
