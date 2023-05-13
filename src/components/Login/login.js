import { Router, Link } from 'react-router-dom'
import './login.css'


function login() {
    return (
        <div>
            <div className="LoginContainer">
                <h1>Welcome Back, <span className='accent'>Time Shaper</span></h1>
                <form className = "LoginForm">
                    <div className ="InputForm">
                        <div>
                            <label for='username'>Username</label>
                            <input type= 'text' id='username'></input> <br/>
                        </div>
                        <div>
                            <label for='password' id ='password'>Password</label>
                            <input type= 'password' id='password'></input>
                        </div>
                    </div>
                    <div className='ForgotComp'>
                        <p>Forgot Password</p>
                        <p>Forgot Username</p>
                    </div>
                    <div className='LoginButtons'>
                        <Link className='ColouredBox' to='/'>Login</Link>
                        <Link className='ColouredBox' to='/register'>Register</Link>
                    </div>
                </form>

                
            </div>
        </div>
    )

}

export default login 