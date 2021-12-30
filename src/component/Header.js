import React from 'react'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import {ShoppingCartIcon} from '@heroicons/react/outline'
import {useSelector} from 'react-redux'

export default function Header() {

    const navigate = useNavigate();
     const products = useSelector(state => state.products)

     const count = Object.keys(products).length;

    return (
        <div className='sticky top-0 z-50 bg-white shadow-md py-2 flex justify-between items-center px-4'>
            {/* logo */}
            <h2 className="p-2 text-lg font-semibold">VasyErp</h2>
            {/* cart option */}
            <Badge badgeContent={count} color="primary">
                <ShoppingCartIcon onClick={()=>navigate('/cart')}  className='text-indigo-700 h-8 w-8 cursor-pointer' />
            </Badge>
           
        </div>
    )
}
