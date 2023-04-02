import React from "react"
import { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from "../ProductCard/ProductCard"
import './homepage.css'

function Homepage() {
    const [products, setProducts] = useState([])

    const fetchAllProducts = () => {
        axios.get("https://localhost:7000/api/Products").then(({ data }) => {
            return data;
        }).then(data => setProducts(data))
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])

    return (
        <div className="allProducts">

            {products.length > 0 && (

                products.map(product => (
                    <ProductCard
                        id={product.id}
                        productName={product.productName}
                        quantity = {product.quantity}
                        price={product.price}
                        image={product.imgUrl}
                    />
                ))

            )}
        </div>
    )
}

export default Homepage