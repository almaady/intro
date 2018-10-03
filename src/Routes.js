import React from 'react'
import {Route} from 'react-router-dom'
import ProductsContainer from './components/products/ProductsContainer';
import LoginContainer from './components/LoginContainer'
import FormContainer from './components/forms/FormContainer';
const Routes = ()=>{
    return(
        <div>
            <Route exact path="/" component={ProductsContainer} />
            <Route path="/login" component={LoginContainer}/>
            <Route path="/new" component={FormContainer}/>
        </div>
    )
}

export default Routes