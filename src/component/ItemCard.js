import React,{useEffect,useState} from 'react'
import {ShoppingCartIcon} from '@heroicons/react/outline'
import {useDispatch,useSelector} from 'react-redux'
import * as t from '../actions/Types'
export default function ItemCard({product,count,setCartCount}) {

    const {id,itemName,price,inStocks, images} = product
    const [added,setAdd] = useState(false);
    const products = useSelector(state=> state.products)
    const dispatch = useDispatch();


    useEffect(()=>{
        if(products[id])
            setAdd(true);
    },[products])

    const addToCart = ()=>{
        // console.log('add to cart',id)
        // const items = localStorage.getItem('item')?.split(',');


        // if(!items)
        // return localStorage.setItem('item',[id]);
        // if(!items.includes(id.toString())){
        //     localStorage.setItem('item',[...items,id]);
        //     setAdd(true)
        //     setCartCount(count+1)
        // }
        dispatch({
            type:t.ADD_PRODUCT,
            payload:product
        })

        setAdd(true)


    }

    const removeFromCart = ()=>{
        // setAdd(false);
        // setCartCount(count-1);
        // const items = localStorage.getItem('item')?.split(',');
        // const index = items.indexOf(id.toString());
        
        // items.splice(index, 1);


        // localStorage.setItem('item',items);
        dispatch({
            type:t.REMOVE_PRODUCT,
            payload:product
        })

        setAdd(false)


    }


    return (
        <div className='flex  flex-col justify-end items-center shadown-md transition duration-500 hover:scale-105 px-2 py-4 rounded-md border-gray-500 shadow-md'>
            <div className=''>
                {/* <img src={product.images[0]} className='object-contain'/> */}
            </div>
             <img src={product.images[0]} className='cursor-pointer h-40 w-60 object-cover'/>
             <div className='py-4'>
                 <h3 className='text-lg text-gray-500 '>{itemName}</h3>
                 <div className='flex space-x-2'>
                     {/* offer price */}
                     <p className='text-gray-600 font-semibold'>??? {price}</p>
                     {/* original price */}
                     <p className='line-through text-gray-400'>???{300}</p>
                 </div>
                 <p className='text-lg text-green-700'> In Stocks {inStocks} </p>
             </div>

             <div className='flex items-center bg-gray-300 rounded-lg space-x-2 px-4 py-2 cursor-pointer active:scale-95 ' onClick = {()=>added?removeFromCart():addToCart()}>
                <p className='hover:text-indigo-600 whitespace-nowrap'>{added?"remove from cart":"Add to cart"}</p>
                    <ShoppingCartIcon className='h-4 w-4 text-indigo-500'/> 
             </div>
        </div>
    )
}
