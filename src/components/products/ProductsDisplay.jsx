import React from 'react'

const img = "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"

const ProductsDisplay = ({colors=[], name,price, pic=img})=>{
    return(
        <div className="product-card">
            <h2>{name}</h2>
            <h3> ${price}</h3>
            <img src={pic} alt="foto del producto"/>
            <div className=""/>
            {colors.map((c,i)=><div style={{backgroundColor:c}} className="colorsin"></div>)}
        </div>

    )

}

export default ProductsDisplay