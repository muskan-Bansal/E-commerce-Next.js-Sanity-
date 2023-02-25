import React from 'react'

import Link from 'next/link';

import { urlFor } from '@/lib/client';

const Product = ({product}) => {
  // console.log(656)
  return (
    <div> 
      {/* { console.log(product+96986)}
     { console.log(product.slug.current)}  */}

       <Link href={`/product/${product.slug.current}`}>
        <div className="product-card">
          <img src={urlFor(product.image && product.image[0])}  width={250} height={250} className="product-image" /> 
          <p className="product-name">{product.name}</p>
          <p className="product-name">${product.price}</p>
        </div> 
         </Link>
    </div>
  )
}

export default Product