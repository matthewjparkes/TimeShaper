import { Router, Link } from 'react-router-dom'
import './CreatePage1.css'


function CreatePage1() {
    return (
        <div>
            <div className="CreatePageContainer">
                <h1>Setup your, <span className='accent'>timeline</span></h1>
                <form className = "CreatePageForm">
                    <div className ="InputForm">
                        <div>
                            <label for='title'>Title</label>
                            <input type= 'text' id='title'></input> <br/>
                        </div>
                        <div>
                            <label for='theme' id ='theme'>Theme</label>
                            <input type= 'text' id='theme'></input>
                        </div>
                    </div>
                    <div className='NextButtons'>
                        <Link className='ColouredBox' to='/create2'>Next</Link>
                    </div>
                </form>

                
            </div>
        </div>
    )

}

export default CreatePage1