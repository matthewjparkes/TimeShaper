import './TimeLineApp.css'
import TimeLineAppCanvas from './Files/TimeLineAppCanvas';

const TimeLineApp = props => {



    return(
    <div>
        <TimeLineAppCanvas id='TimeLineApp' Title = {props.Title} StartDate = {props.StartDate} EndDate = {props.EndDate} Intervals = {props.Intervals} TimeType = {props.TimeType} ></TimeLineAppCanvas>
    </div>
    )
}

export default TimeLineApp