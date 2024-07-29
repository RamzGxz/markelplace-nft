import React from 'react';
import { SquaresFour, GridNine, GridFour, MagnifyingGlass, ShoppingCart } from '@phosphor-icons/react/dist/ssr';

const products = [
    { id: 1, name: 'Dogen Ape #7055', price: '1.05 ETH', img: '/allProduct/product1.png' },
    { id: 2, name: 'Dogen Ape #7056', price: '1.02 ETH', img: '/allProduct/product2.png' },
    { id: 3, name: 'Dogen Ape #7057', price: '1.03 ETH', img: '/allProduct/product3.png' },
    { id: 4, name: 'Dogen Ape #7058', price: '1.04 ETH', img: '/allProduct/product4.png' },
    { id: 5, name: 'Dogen Ape #7059', price: '1.01 ETH', img: '/allProduct/product5.png' },
    { id: 6, name: 'Dogen Ape #7060', price: '1.00 ETH', img: '/allProduct/product6.png' },
    { id: 7, name: 'Dogen Ape #7061', price: '1.05 ETH', img: '/allProduct/product1.png' },
    { id: 8, name: 'Dogen Ape #7062', price: '1.02 ETH', img: '/allProduct/product2.png' },
  ];
  
  const AllProduct = () => {
    return (
      <div className="mb-8 ">
      <img
        src="/allProduct/bg-product.png"
        alt="Banner"
        className="w-full h-64 object-cover rounded-lg mb-4 max-w-3xl mx-auto"
      />
      <div className=" text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">All Explore Product</h1>
            <div className="flex justify-center space-x-2 mb-4">
            <div className="flex items-center gap-2 p-2 rounded bg-purple-600 border border-gray-700 w-full max-w-md">
            <MagnifyingGlass size={24}/>
            <input className="bg-transparent w-full" type="text" placeholder="Search or name by product" /> 
            </div>
              <select className="p-2 rounded bg-purple-600 border border-gray-700">
                <option>Price High to Low</option>
                <option>Price Low to High</option>
              </select>
              <div className="flex w-fitt p-2 rounded bg-purple-600 border border-gray-700">
              <SquaresFour size={32} />
              <GridFour size={32} />
              <GridNine size={32} />
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-800 p-4 rounded-lg">
                  <img src={product.img} alt={product.name} className="w-46 h-42 object-cover rounded-lg mb-4" />
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-400">{product.price}</p>
                  <div className='flex items-center justify-center mt-2 p-2 bg-white rounded hover:bg-gray-200 w-full gap-5'>
                  <button className="text-black text-center font-bold">Buy</button>
                  <ShoppingCart size={32} color='black'/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default AllProduct;