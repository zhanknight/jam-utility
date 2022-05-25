
function Resultbox(props) {

    return (
        // just show me everything in the object right now
        <div class="App-item"> 
       <h4>Scale:</h4>{props.data.scale}<br />
       <h4>Notes in the scale:</h4><br />
                <ul>
                {props.data.notes.map(data => {
                    return (
                        <li key={data}>{data}</li>
                    )
                }) }
                </ul>
       <h4>Root of the scale:</h4> {props.data.root}<br />
       <h4>Scale Quality:</h4> {props.data.type}<br />
        </div>
    )
}

export default Resultbox;



