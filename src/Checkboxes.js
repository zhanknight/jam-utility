function Checkboxes(props) {
    const notenames = ["A", "A#/Bb", "B", "C", "C#/Db", "D,", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"]

    function sSelectedNotes(event) {
      // Here, we invoke the callback with the new value
      props.sSelectedNotes(event);
    }
    return (
        <div className="App-selectorbar"> <h3>User selects notes to filter by here.</h3><br />

     <div>
        {notenames.map(note => {
            return (
                <>
                <button onClick={() => {sSelectedNotes([note])}}>{note}</button>
                
                </>  
            )
        }) }
      </div>
      </div>
    );
  }

  export default Checkboxes;