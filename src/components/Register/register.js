import "./register.css"
import { Router, Link } from 'react-router-dom'

function Register (){

    return(
    <div className="RegisterContainer">
        <h1>Enrol as a <span className='accent'>Time Shaper</span></h1>
        <form className = "LoginForm">
            
            <div className ="InputForm">
                <h2 className= 'accent'>Personal Details</h2>
                <div>
                    <label for='name'>First Name</label>
                    <input type= 'text' id='name'></input> <br/>
                </div>
                <div>
                    <label for='surname'>Last Name</label>
                    <input type= 'text' id='surname'></input> <br/>
                </div>
                <div>
                    <label for='email'>Email</label>
                    <input type= 'text' id='email'></input> <br/>
                </div>
                <div>
                    <label for='DOB'>Date of Birth</label>
                    <input type= 'date' id='DOB'></input> <br/>
                </div>
                <h2 className= 'accent'>Account Details</h2>
                <div>
                    <label for='username'>Username</label>
                    <input type= 'text' id='username'></input> <br/>
                </div>
                <div>
                    <label for='password' id ='password'>Password</label>
                    <input type= 'password' id='password'></input>
                </div>
            </div>
            <div className='LoginButtons'>
                <Link className='ColouredBox' to='/create1'>Register</Link>
            </div>
        </form>

        
    </div>
    )
}


export default Register