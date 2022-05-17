function Checkboxes() {

    const notenames = ["A", "A#/Bb", "B", "C", "C#/Db", "D,", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"]
  
    return (
        <div className="App-selectorbar"> <h3>User selects notes to filter by here.</h3><br />

     <div>
        {notenames.map(note => {
            return (
                <>
                <input key={note} type="checkbox"/> 
                <label htmlFor={note}>{note}</label>
                </>  
            )
        }) }
      </div>
      </div>
    );
  }

  export default Checkboxes;