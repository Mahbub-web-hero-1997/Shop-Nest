import React from 'react';
import { Link } from 'react-router-dom';

const NotFund = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl text-red-700 font-bold'>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link className='btn bg-sky-400 text-white' to="/">Go back to home</Link>
        </div>
    );
};

export default NotFund;