import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from 'next/router'
import { Row, Col, ListGroup, Image, Form, Button, Card} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart} from "../redux/actions/cart";


const CartScreen = ({id, qty}) => {

    const quantity = parseInt(qty);

    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, quantity))
        }

    }, [dispatch, id, quantity])
    


    return (
        <div>
            Cart {qty} {id}
        </div>
    )
}

export default CartScreen
