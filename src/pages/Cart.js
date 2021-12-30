import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Modal from '../component/Modal'


import { v4 as uuidv4 } from 'uuid';

export default function Cart({}) {

    // get products
    const [prod, setProd] = useState([]);
    const [subTotal,setSubTotal] = useState(0)
    const [showModal,setShow] = useState(false)
    const dispatch = useDispatch();
    const [loading,setLoading] =  useState(false);

    const products = useSelector(state=>state.products) 
    
    
    const count = Object.keys(products).length;
    // useEffect(()=>{
    //     const items = localStorage.getItem('item')
    //     if(items)
    //     {
    //         setProd(items.split(',').map((id)=>id))
    //     }
    // },[])

    const getSubTotal = ()=>{
        let total = 0;
        Object.keys(products).forEach((key)=>{
            total+=products[key].price*products[key].quantity;
        })

        return total
    }

    const sendData = ()=>{
        setLoading(true)
        axios.post('https://janam.free.beeceptor.com/',{
            orderNo:uuidv4(),
            subTotal:getSubTotal(),
            products
        }).then(()=>{
            dispatch({
                type:'ORDER_DONE'
            })
            
            setLoading(false)

            setShow(true)
        }).catch(()=>{

        })
    }

    const increaseQuantity = ()=>{
        dispatch({
            type:"INCREASE_QUANTITY"
        })
    }

    const renderproducts = ()=>{

      
        // return prod.map((id)=>
        //   (<div className='flex space-x-4 items-center bg-gray-300 my-2 rounded-lg'>
        //         <img className="h-20 w-30 rounded-lg " src={products[id-1].images[0]}/> 
        //         <div className='' >
        //            { products[id-1].itemName}
        //         </div>
        //     </div>
        // ))
        // console.log(Object.keys(products))
       return  Object.keys(products).map((key)=>{
            console.log(products[key])
            return (<div className='flex space-x-4 items-center bg-gray-300 my-2 rounded-lg'>
                <div className=' h-20 w-24'>
                    <img className=" rounded-l-lg h-full w-full object-fill"  src={products[key]?.images[0]}/> 
                </div>

                <div className='flex w-full items-center'>
                <div className='flex-1' >
                    { products[key].itemName}
                    <p className='text-sm text-gray-600'>$ {products[key].price}</p>
                 </div>

                 <div className='flex items-center  pr-4 space-x-2'>
                    <div className='flex flex-col '>
                        <ArrowDropUpIcon className='cursor-pointer hover:text-blue-600 ' onClick={()=>dispatch({type:"INCREASE_QUANTITY",payload:products[key]})}/>
                        <ArrowDropDownIcon onClick={()=>dispatch({type:"DESCREASE_QUANTITY",payload:products[key]})} className='cursor-pointer hover:text-blue-600 hover:scale-105 '/></div>
                        <p className="text-sm text-indigo-600">{products[key].quantity}</p>
                        <DeleteIcon onClick={()=>dispatch({
                            type:'REMOVE_PRODUCT',
                            payload:products[key]
                        })} className='text-red-500 cursor-pointer'/>
                    </div>
                
                </div>
             
             </div>)
        })
        
    }
   



    return (
        <div className='flex justify-center' >
        {showModal&&<Modal setShow={setShow}/>}
            {!loading?(
                <div className='shadow-md flex'>
                  
                   {count!==0?<><div className='p-8 overflow-y-auto h-full'>
                        <h1 className='text-gray-800 font-bold text-xl'>Cart</h1>
                        {renderproducts()}
                    </div>
                <div className='rounded-lg shadow-xl p-8 flex space-x-2 justify-center items-center'>
                        <p>Subtotal</p>: <p>₹ {getSubTotal()}</p>
                        <button className='bg-indigo-300 py-1 px-2 rounded-full transition duration-400 active:scale-95 text-gray-600' onClick={()=>sendData()}>Check out</button>
                </div></>:<h1 className='text-2xl font-bold'>You don't have any item in cart</h1>}
                 
      
                   

            </div>): <CircularProgress />
}
            
        </div>
    )
}
