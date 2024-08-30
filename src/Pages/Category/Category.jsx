import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='w-11/12 mx-auto flex gap-3'>
        <Link to='#' className='hover:scale-90 transition-all '>
        <img className='w-24 h-24 rounded-full' src="https://i.ibb.co/N6zVYnr/Stainless-Steel-4mm-3-D-Design-Indian-Door-Aldrop-500x500.jpg" alt="" />
        </Link>
        
        </div>
    );
};

export default Category;