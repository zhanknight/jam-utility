
function Resultbox(props) {

    return (
        // just show me everything in the object right now
        <div class="App-item"> <h3> RESULT: </h3><br />
        {props.data.scale}<br />
        {props.data.notes}<br />
        {props.data.root}<br />
        {props.data.type}<br />
        {props.data.display.toString()}
        </div>
    )
}

export default Resultbox;



