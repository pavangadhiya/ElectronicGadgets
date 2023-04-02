import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import './addproduct.css';
function AddProduct() {

    const location = useLocation();

    //  const Name = location.state.name
    let existingProduct = location.state ? location.state.existingProduct : false;
    // console.log(!!existingProduct);
    // console.log(existingProduct?.price);

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ productName: !!existingProduct ? existingProduct?.productName : "", quantity: !!existingProduct ? existingProduct?.quantity : "", price: !!existingProduct ? existingProduct?.price : "", imgUrl: !!existingProduct ? existingProduct?.image : "" })
    const [state, setState] = useState(false);
    const [updateState, setUpdateState] = useState(!!existingProduct);

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const addProduct = async (e) => {
        e.preventDefault();

        let response;
        if (updateState)
            response = await axios.put(`https://localhost:7000/api/Products/${existingProduct?.id}`, {
                id: existingProduct.id,
                productName: credentials.productName,
                quantity: credentials.quantity,
                price: credentials.price,
                imgUrl: credentials.imgUrl
            });
        else
            response = await axios.post("https://localhost:7000/api/Products", credentials);

        console.log(response);

        if (updateState && response.status === 204) {
            setState(true);
            
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else if (!updateState && response.status === 201) {
            setState(true);

            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
        else {
            alert(response?.json()?.error);
        }
    }

    return (
        <>
            <div style={{ marginTop: '50px' }}></div>
            {(
                () => {
                    if (state === true) {
                        return (<>
                            <div class="alert alert-success alert-dismissible" role="alert" Style="background-color:green; color:white;">
                                Product <strong>Successfully</strong> {updateState? "Updated!!": "Added!!"}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </>)

                    }
                }
            )()}
            <div className="bg-img">
                <div className="contentR">
                    <header style={{ color: 'black' }}>{!existingProduct?"Add Product":"Update Product"}</header>
                    <form onSubmit={addProduct}>
                        <div className="field space">
                            <span></span>
                            <input type="text" name='productName'
                                onChange={onChange} value={credentials.productName} required placeholder="Product Name" />

                        </div>
                        <div className="field space">
                            <span></span>
                            <input type="number" name='quantity' onChange={onChange} value={credentials.quantity} min="1" required placeholder="Quantity" />
                        </div>
                        <div className="field space">
                            <span></span>
                            <input type="number" name='price' value={credentials.price} onChange={onChange} min="1" required placeholder="Price" />
                        </div>
                        <div className="field space">
                            <span></span>
                            <input type="text" name='imgUrl' onChange={onChange} value={credentials.imgUrl} required placeholder="ImageUrl" />
                        </div>
                        {/* <div className="field space"> */}
                            <button type='submit' className="btn btn-secondary space" Style="width:100%;border-radius:25px" 
                                value="Add">{!existingProduct?"Add":"Update"}</button>
                        {/* </div> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct;