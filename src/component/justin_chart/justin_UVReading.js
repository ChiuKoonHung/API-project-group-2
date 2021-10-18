
import './justin_UVReading.css';
import moment from 'moment';
const format1 = "MMMM Do YYYY, HH:mm:ss a"

/*
    This is the pure component. It doesn't fetch any data but render it from what are given from props.
*/
function UltraVioletReadings({time, status, index}) {
    
    return (
        <>
            <div className='dateTime'>
            {/* // display date & time  */}
             <p className='status-check'>Hourly update as of:</p><p className='status-remarks'>~ {moment(time).format(format1, true)}</p>
            </div>
            <hr />
            <div className='status'>
            {/* // set condition for UV status.  */}
            { status === "healthy" ? 
            <>
            <p className='status-check'>Status: {status}</p><p className='status-remarks'>~ Safe to go out</p>
            </> :
            <>
            <p className='status-check'>Status: {status}</p><p className='status-remarks'>~ Avoid going out!</p>
            </>}
            </div>
            <hr />
            <div className='index'>
            {/* // set condition for UV index.  */}
            { index >= 6 ? 
            <>
             <p className='index-display'>Ultra-violet Index: {index}</p><p className='index-remarks'>~ Remember to apply sunscreen and wear sunglasses when going out!</p>
            </> :
            <>
            <p className='index-display'>Ultra-violet Index: {index}</p><p className='index-remarks'>~ Index is currently low/moderate</p>
            </>}
            </div>
        </>
    )
}

export default UltraVioletReadings; 

