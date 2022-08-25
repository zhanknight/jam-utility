
function Resultbox(props) {

    return (
        // just show me everything in the object right now
        <div className="App-item"> 
       <h3 className={props.data.type}>{props.data.scale}</h3>
       <h4>Notes in the scale:</h4>
   
                {props.data.notes.map(data => {
                    return (
                        `${data}   `
                    )
                }) }
        <h4>Chords in the scale:</h4>
   
                {props.data.chords.map(data => {
                    return (
                        `${data}   `
                    )
                }) }
             
        </div>
    )
}

export default Resultbox;


