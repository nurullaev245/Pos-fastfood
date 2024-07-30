import React from 'react';

const ProductCard = ({ malumot, id }) => {
    return (
        <div key={id} className='flex-1 min-w-[23%] bg-base-100 shadow-lg rounded-lg m-4'>
            <figure>
                <img src={malumot.imageUrl} alt={malumot.name} className='w-full h-52 object-cover rounded-t-lg' />
            </figure>
            <div className='p-4'>
                <h3 className='text-xl font-semibold text-primary mb-2'>{malumot.name}</h3>
                <p className='text-gray-700 mb-2'>{malumot.description}</p>
                <p className='text-sm text-gray-500 mb-2'>Category: {malumot.category}</p>
                <p className='text-sm text-gray-500 mb-2'>Calories: {malumot.calories}</p>
                <p className='text-lg font-bold text-secondary mb-2'>${malumot.price.toFixed(2)}</p>
                <div className='flex items-center mb-2'>
                    <span className='text-yellow-500 mr-1'>
                        {Array(Math.round(malumot.rating)).fill('★').join('')}
                        {Array(5 - Math.round(malumot.rating)).fill('☆').join('')}
                    </span>
                    <span className='text-sm text-gray-600'>({malumot.reviews} reviews)</span>
                </div>
                <button className='btn btn-primary w-full'>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
