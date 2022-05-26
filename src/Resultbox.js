
function Resultbox(props) {

    return (
        // just show me everything in the object right now
        <div class="App-item"> 
       <h3>{props.data.scale}</h3>
       <h4>Notes in the scale:</h4>
   
                {props.data.notes.map(data => {
                    return (
                        `${data}   `
                    )
                }) }
             
        </div>
    )
}

export default Resultbox;


