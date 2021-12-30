import {Header} from './component'
import Product from './pages/Product';
import {useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart'


function App() {
  // if(!localStorage.getItem('item'))
  //   localStorage.setItem([]);
  const [cartCount,setCartCount] =  useState(0);

  useEffect(()=>{
      if(localStorage.getItem('item'))
      setCartCount(localStorage.getItem('item').split(',').length);
  },[])

  const products = [
    {
        id:1,
        itemName:'Women Fit and Flare Black Dress',
        images:[
            'https://rukminim1.flixcart.com/image/880/1056/kf0087k0/dress/x/b/f/s-polka-drs-tamina-original-imafvk34gdbebncn.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kf0087k0/dress/x/b/f/s-polka-drs-tamina-original-imafvk33bc5knags.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kf0087k0/dress/x/b/f/s-polka-drs-tamina-original-imafvk34zexnf9zx.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kf0087k0/dress/x/b/f/m-polka-drs-tamina-original-imafvk34yhy4gxbz.jpeg?q=50'
        ],
        price:441,
        inStocks:340
    },
    {
        id:2,
        itemName:'Solid MenGreen T-Shirt',
        images:[
            'https://rukminim1.flixcart.com/image/880/1056/kf75fgw0-0/t-shirt/f/6/j/xxl-t325-pwgh-seven-rocks-original-imafvpbgf6nchmfj.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kf75fgw0-0/t-shirt/e/v/2/xxl-t325-pwgh-seven-rocks-original-imafvpbgpyqbzypw.jpeg?q=50',

        ],
        price:340,
        inStocks:140
    },
    {
        id:3,
        itemName:'Solid Men Collar White, Blue T-Shirt',
        images:[
            'https://rukminim1.flixcart.com/image/880/1056/kjuby4w0/t-shirt/4/f/7/xl-fc4057-fastcolors-original-imafzbj56yxpkzzh.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kxjav0w0/shopsy-t-shirt/1/4/e/s-fc4058-1-fastcolors-original-imag9zfcfxqqyn6e.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kxjav0w0/shopsy-t-shirt/k/h/f/s-fc4058-1-fastcolors-original-imag9zfczva62wke.jpeg?q=50',
        ],
        price:441,
        inStocks:340
    }
    ,        {
        id:4,
        itemName:'Breathable, Running, Shoes For Women',
        images:[
            'https://rukminim1.flixcart.com/image/880/1056/kjiwfbk0-0/shoe/o/a/t/1178-pink-3-shozie-pink-grey-original-imafz2ps94cse5su.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/km82d8w0/shoe/b/z/4/3-1178-pink-3-shozie-pink-grey-original-imagf6yzagaz2egj.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kjg1jm80-0/shoe/h/n/l/1178-pink-shozie-pink-grey-original-imafzybrvahggmzm.jpeg?q=50'
        ],
        price:491,
        inStocks:340
    },
    {
        id:5,
        itemName:'Women Fit and Flare Black Dress',
        images:[
            'https://rukminim1.flixcart.com/image/880/1056/kf0087k0/dress/x/b/f/s-polka-drs-tamina-original-imafvk34gdbebncn.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kf0087k0/dress/x/b/f/s-polka-drs-tamina-original-imafvk33bc5knags.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kf0087k0/dress/x/b/f/s-polka-drs-tamina-original-imafvk34zexnf9zx.jpeg?q=50',
            'https://rukminim1.flixcart.com/image/880/1056/kf0087k0/dress/x/b/f/m-polka-drs-tamina-original-imafvk34yhy4gxbz.jpeg?q=50'
        ],
        price:441,
        inStocks:340
    }
]


  return (
   <div className =''>
    

     <BrowserRouter>
         <Header count={cartCount}/>
               
                    
                    <Routes>
                        <Route exact path="/" element={ <Product products={products} setCartCount={setCartCount} count={cartCount}/>}></Route>
                        <Route exact path="/cart" element={<Cart products = {products} />}></Route>

                    </Routes>
              
               
            </BrowserRouter>
    
   </div>
  );
}

export default App;
