import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddProduct from "../addProduct/AddProduct";

import "./ProductCard.css";

function ProductCard(props) {
    const [editState, setEditState] = useState(false);
    const [state, setState] = useState(false);

    return (
        <>
            <div Style="position:absolute;top:1%">
            {(
                () => {
                    if (state === true) {
                        window.alert("are you sure want to delete this item??");
                    }
                }
            )()}
            </div>
            <div className="card" Style="width: 27%;">
                <img src={props?.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{console.log(props?.image)}</h5>
                    <p className="card-text"><strong>{props?.productName}</strong></p>
                    <p className="card-text"><strong>Price: </strong>{props?.price}</p>
                    <div className="card-text"><strong Style="color:red;position:absolute;top:72%;right:05%">Only {props?.quantity} items left </strong></div>

                    <div className="btn_group">
                        <button className="btn btn-primary" onClick={async()=>{
                            const response = await axios.post(`https://localhost:7000/api/ItemInCarts`, {
                                ProductName: props?.productName,
                                ImgUrl:props?.image,
                                price: props?.price,
                            });

                            if(response.status===201){
                                setTimeout(() => {
                                    window.location.reload();
                                }, 2000);
                            }
                        }}>Add to Cart</button>
                        <button onClick={() => setEditState(true)} className="d-flex btn btn-warning"><NavLink to='/addproduct' className="Link" state={{ existingProduct: props }}>Edit Product</NavLink></button>
                        <button onClick={async () => {
                            setState(true);
                            const response = await axios.delete(`https://localhost:7000/api/Products/${props?.id}`);
                            console.log(response);

                            if (response.status === 204) {
                                window.location.reload();
                            } else {
                                console.log(response);
                            }
                        }} className="d-flex btn btn-danger">Remove Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;

