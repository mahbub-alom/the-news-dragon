import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftInner from './LeftInner';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div>
            <div className='mt-3'>
                <h4>All Category</h4>
                <h2 className='bg-secondary bg-opacity-25 text-center rounded'>National News</h2>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`} className='text-dark ms-5 text-decoration-none'>{category.name}</Link></p>)
                }
            </div>
            <LeftInner></LeftInner>
        </div>
    );
};

export default LeftNav;