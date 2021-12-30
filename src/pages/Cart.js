import React,{useEffect,useState} from 'react'

export default function Cart({products}) {

    // get products
    const [prod, setProd] = useState([]);
    const [subTotal,setSubTotal] = useState(0)
    useEffect(()=>{
        const items = localStorage.getItem('item')
        if(items)
        {
            setProd(items.split(',').map((id)=>id))
        }

       
    },[])

    const getSubTotal = ()=>{
        let total = 0;
        for(let i=0;i<prod.length;i++)
        {
            total+=products[prod[i]-1].price
        }

        return total;
    }

    const sendData = ()=>{

    }

    const renderproducts = ()=>{

      
        return prod.map((id)=>
          (<div className='flex space-x-4 items-center bg-gray-300 my-2 rounded-lg'>
                <img className="h-20 w-30 rounded-lg " src={products[id-1].images[0]}/> 
                <div className='' >
                   { products[id-1].itemName}
                </div>
            </div>
        ))
    }
   



    return (
        <div className='flex justify-center' >

            <div className='shadow-md flex'>
                <div className='p-8 overflow-y-auto h-full'>
                    <h1 className='text-gray-800 font-bold text-xl'>Cart</h1>
                    {renderproducts()}
                </div>
                <div className='rounded-lg shadow-xl p-8 flex justify-center items-center'>
                    <p>Subtotal</p>: <p>₹ {getSubTotal()}</p>
                    <button className='bg-indigo-300 py-1 px-2 rounded-full transition duration-400 active:scale-95 text-gray-600' onClick={()=>sendData()}>Check out</button>
                </div>
            </div>
            
        </div>
    )
}
