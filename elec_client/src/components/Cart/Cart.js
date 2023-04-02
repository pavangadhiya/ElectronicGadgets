import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cart() {
    const [products, setProducts] = useState([])

    const fetchAllProducts = () => {
        axios.get("https://localhost:7000/api/ItemInCarts").then(({ data }) => {
            return data;
        }).then(data => setProducts(data))
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])


    return (
        <section class="h-100 h-custom" Style="background-color: #eee;">
            <div class="container py-5 h-100">
                <div class="card">
                    <div class="card-body p-4">

                        <div class="row">


                            <div class="col-lg-12">
                                <h5 class="mb-3"><a href="/" class="text-body"><i
                                    class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>


                                <div class="d-flex justify-content-between align-items-center mb-4">
                                    <div>
                                        <p class="mb-1">Shopping cart</p>
                                        <p class="mb-0">You have {products.length} items in your cart</p>
                                    </div>
                                </div>

                                {products.length > 0 && (

                                    products.map(product => (
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div>
                                                            <img
                                                                src={product.imgUrl}
                                                                class="img-fluid rounded-3" alt="Shopping item" Style="width: 65px;"></img>
                                                        </div>
                                                        <div class="ms-3">
                                                            <h5>{product.productName}</h5>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div Style="width: 100px;">
                                                            <h5 class="mb-0">₹ {product.price}/-</h5>
                                                        </div>

                                                        <a href="#" class="ms-2" onClick={async () => {
                                                            // setState(true);
                                                            const response = await axios.delete(`https://localhost:7000/api/ItemInCarts/${product?.id}`);
                                                            console.log(response);

                                                            if (response.status === 204) {
                                                                window.alert("are you sure want to remove this item from your cart??");
                                                                window.location.reload();
                                                            } else {
                                                                console.log(response);
                                                            }
                                                        }} Style="color: #dc3545;"><i class="fas fa-trash-alt"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))

                                )}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}