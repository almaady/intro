import React from 'react'


const FormDisplay = ({onChange, onSubmit}) =>{
    return(
        <div>
            <h2>Alta de Producto</h2>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} name="name" type="text" placeholder="Nombre del Producto"/>
                <br/>
                <input onChange={onChange} name="price" type="number" placeholder="Precio del Producto"/>
                <br/>
                <input onChange={onChange} name="pic" type="text" placeholder="Imagen del Producto"/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default FormDisplay