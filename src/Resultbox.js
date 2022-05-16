import {scaleData} from './Scales.js'

function Resultbox() {


    return (
        <div class="App-item"> Filtered results show up in here. <br />
        {scaleData[0].scale}<br />
        {scaleData[0].notes}<br />
        </div>

    )
}

export default Resultbox;



