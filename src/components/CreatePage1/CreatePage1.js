import { Router, Link } from 'react-router-dom'
import './CreatePage1.css'


const CreatePage1 = props => {

    const handleThemeChange = (e) => {
        props.SetTheme(e.target.value)
    }

    const handleTitleChange = (e) => {
        props.SetTitle(e.target.value)
    }
    return (
        <div>
            <div className="CreatePageContainer">
                <h1>Setup your, <span className='accent'>timeline</span></h1>
                <form className = "CreatePageForm">
                    <div className ="InputForm">
                        <div>
                            <label for='title'>Title</label>
                            <input type= 'text' id='title' onChange={handleTitleChange}></input> <br/>
                        </div>
                        <div>
                            <label for='theme' id ='theme'>Theme</label>
                            <input type= 'text' id='theme' onChange={handleThemeChange}></input>
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