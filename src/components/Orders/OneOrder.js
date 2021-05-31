import React, {useEffect, useState } from 'react'
import { collectionOrders } from '../../firebase'
import './UserOrders.css'
import { useHistory } from 'react-router-dom'

function OneOrder() {
    const [createN, setCreate] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
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

    return (
        <>
            <div onClick={handleClick} order={selectedOrder} className="ordersDad">
            {
                createN.length !== 0 ? (
                    createN.map((item) => (
                        
                        <span className="ordersBoy" key={item.id}>
                            <p>Id: {item.numOrden}</p>
                            <p>Fecha de entrega: {item.entrega}</p>
                        </span>     
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