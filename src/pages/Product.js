import React,{useState} from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import {ItemCard} from '../component'

export default function Product({products}) {

    const [search,setSearch] = useState('');

  
    const renderItems = ()=>{
        return search===''?products.map((product)=><div className='flex justify-center p-4'><ItemCard product={product} /></div>):null
    }

    return (
        <div className='py-2 px-4'>
            <h1 className='font-bold text-gray-600 text-2xl'>Products</h1>
            {/* product top */}
            <div className='my-4 flex items-center space-x-2 rounded-full border border-gray-200  w-96 px-4 py-2 shadow-md'>
                <input className='px-2 py-1 w-full outline-none' placeholder='Search for product' type='text' />
                <SearchIcon className='h-6 w-6'/>
            </div>

            {/*section for product */}
            <div className='shadow-md rounded-xl   p-4'>
               <p>{4} results</p>
               {/* items list */}
               <div className='grid grid-cols-4'>
                    {renderItems()}
               </div>
            </div>
        </div>
    )
}
