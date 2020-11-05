import React from 'react'
import SideImageHeader from '../../components/SideImageHeader'
import styles from './loginstyle.module.css'
const Login = ()=>{
    
    return (
        <div className={styles.loginContainer}>
            <SideImageHeader imageRef= './jay-wennington-N_Y88TWmGwA-unsplash.jpg' imageAlt='Imagem lateral'/>

            <form style={{width: '40%'}} method="post">
                <div className="inputContainer">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email"/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password"/>
                </div>
                <button type="submit">enviar</button>
            </form>
        </div>    
    )
    ;
}

export default Login;