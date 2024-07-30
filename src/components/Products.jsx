import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const requestProducts = async () => {
        try {
            let request = await fetch('http://localhost:3000/products');
            let response = await request.json();
            setProducts(response);
        } catch (err) {
            console.log("Fetch failed: ", err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        requestProducts();
    }, []);

    return (
        <div className='py-20 container mx-auto max-w-[95%]'>
            {
                loading
                ? <p>Loading...</p>
                : <div className='flex flex-wrap gap-x-[2%] gap-y-10'>
                    {products.map((product, id) => (
                        <ProductCard malumot={product} id={id} />
                    ))}
                  </div>
            }
        </div>
    );
}

export default Products;
