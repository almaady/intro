import React from 'react'
import  styles from './LoginDisplay.module.css'

const LoginDisplay = ({type, changeType, clase, onChange,onSubmit, error}) => {
    return (
        <div className={styles.pollollon}>
        <h2>Log in</h2>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} name="email" type="email" placeholder="Email" className={styles[clase]}/>
                <br/>
                <input onChange={onChange} name="pass" type={type} placeholder="Password"/>
                <input onChange={changeType} type="checkbox"/> Mostrar contraseña
                <br/>
                <input type="submit"/>
                <p>{error}</p>
            </form>
        </div>
    )
}


export default LoginDisplay