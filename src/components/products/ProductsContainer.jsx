import React,{Component} from 'react'
import ProductsDisplay from './ProductsDisplay'

class ProductsContainer extends Component{
    state={
        products:[
            {
            id:1,
            name:'Galletas',
            price:123,
            pic:'https://i.ytimg.com/vi/luCc32NZI2g/maxresdefault.jpg',
            colors:['red', 'blue', 'purple']
            },{
            id:2,
            name:'Galletas',
            price:200,
            pic:'',
            colors:['red', 'blue', 'purple']
            },{
            id:3,
            name:'Leche',
            price:340,
            colors:['red', 'blue', 'purple']
        
            },{
                id:4,
                name:'pan',
                price:400,
                pic:''
                }
        ]
    }

    showProduct = (product,index)=>{
        return <ProductsDisplay key={index}  {...product}/>
    }

    tercerForma =()=>{
        const {products} = this.statere
        return products.map((p,i)=><div key={i}>{p.name}</div>)
    }


    render(){
        const {products} = this.state
        return(
        <div className="flex-papa">
            {products.map(this.showProduct)}
        </div>
        )
    }
}

export default ProductsContainer