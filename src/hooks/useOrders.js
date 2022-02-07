import { useState } from "react";

export const useOrders = () => {
    const [Orders, setOrders] = useState([]);

    return{
        Orders,
        setOrders,
    }
}