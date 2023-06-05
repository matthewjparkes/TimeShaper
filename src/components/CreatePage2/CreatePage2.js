import { Router, Link } from 'react-router-dom'
import '../CreatePage1/CreatePage1.css'


function CreatePage2() {
    return (
        <div>
            <div className="CreatePageContainer">
                <h1>Setup your <span className='accent'>timeline</span></h1>
                <form className = "CreatePageForm">
                    <div className ="InputForm">
                        <div>
                            <label for='type'>Time Type</label>
                                <select name="type" id="type">
                                    <option value="Yearly">Yearly</option>
                                </select>
                        </div>
                        <div>
                            <label for='theme' id ='theme'>Start</label>
                            <input type= 'date' id='theme'></input>
                        </div>
                        <div>
                            <label for='title'>End</label>
                            <input type= 'date' id='title'></input> <br/>
                        </div>
                        <div>
                            <label for='theme' id ='theme'>Intervals</label>
                            <input type= 'number' id='theme'></input>
                        </div>
                    </div>
                    <div className='NextButtons'>
                        <Link className='ColouredBox' to='/app'>Next</Link>
                    </div>
                </form>

                
            </div>
        </div>
    )

}

export default CreatePage2