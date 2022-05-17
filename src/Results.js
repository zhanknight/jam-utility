import Resultbox from "./Resultbox";
import {scaleData} from './Scales.js'


function Results() {

    return (
        <div className="App-results">

                {scaleData.map(data => {
                    return (
                        <>
                        <Resultbox data={data} />
                        </>  
                    )
                }) }

        </div>  
    )
}

export default Results;


// currently generating all scales in the scales data file
// eventually generate from an intermediate filtered array