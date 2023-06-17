import { Router, Link } from 'react-router-dom'
import '../CreatePage1/CreatePage1.css'


const CreatePage2= props => {

    const handleTimeTypeChange =(e)=>{
        props.SetTimeType(e.target.value)
    }
    const handleStartDateChange =(e)=>{
        props.SetStartDate(e.target.value)
    }
    const handleEndDateChange =(e)=>{
        props.SetEndDate(e.target.value)
    }
    const handleIntervalsChange =(e)=>{
        props.SetIntervals(e.target.value)
    }
    return (
        <div>
            <div className="CreatePageContainer">
                <h1>Setup your <span className='accent'>timeline</span></h1>
                <form className = "CreatePageForm">
                    <div className ="InputForm">
                        <div>
                            <label for='type'>Time Type</label>
                                <select name="type" id="type" onChange={handleTimeTypeChange}>
                                    <option value="Yearly">Yearly</option>
                                    <option value="Monthy">Monthly</option>
                                </select>
                        </div>
                        <div>
                            <label for='theme' id ='theme'>Start</label>
                            <input type= 'date' id='theme' onSelect={handleStartDateChange}></input>
                        </div>
                        <div>
                            <label for='title'>End</label>
                            <input type= 'date' id='title' onSelect={handleEndDateChange}></input> <br/>
                        </div>
                        <div>
                            <label for='theme' id ='theme'>Intervals</label>
                            <input type= 'number' id='theme'onChange={handleIntervalsChange}></input>
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