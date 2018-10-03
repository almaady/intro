import React, {Component} from 'react'
import LoginDisplay from './LoginDisplay'

class LoginContainer extends Component{
    state={ 
        error:null,
        clase: null,
        type: 'password'
    }
    
    onSubmit= (e)=>{
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.pass.value)
        //1._ comprobar que el password y email sean iguales
        const correoU = e.target.email.value
        const contraseñaU = e.target.pass.value
        
        if(correoU !== 'ady@juanfutbol'){
            const error = "Tu email está mal"
            this.setState({error})
        } else if(contraseñaU !== '123456'){
            const error = "Tu contraseña está mal"
            this.setState({error})
        }else{
            this.setState({error:null})
        }
    }
        onChange= (e) =>{
            console.log(e.target.value)
            

            if(!e.target.value.includes('@')){
                const error ='Esto no tiene forma de correo'
                const clase = "wrong"
                
                this.setState({error,clase})
            }else if(e.target.value !== 'ady@juanfutbol.com'){
                const clase ="warning"
                const error='Tu correo está mal'
                this.setState({error,clase})
            }else{
                this.setState({error:null, clase:'success'})

            }

        }   

        changeType=(e)=>{
            if(e.target.checked){
                const type="text"
                this.setState({type})
            }else{
                const type="password"
                this.setState({type})
            }
        }
    

    render(){
        const {error, clase,type} = this.state
        return(
        <div>
            <LoginDisplay 
            //2. pasarle el error al displayç
                clase={clase}
                error={error}
                type={type}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                changeType={this.changeType}
                
            />
        </div>
        )
    }
}

export default LoginContainer