function Checkboxes() {

    const notenames = ["a", "a#", "b", "c", "c#", "d,", "d#", "e", "f", "f#", "g", "g#"]
  
    return (
        <div className="App-selectorbar"> User selects notes to filter by here.<br />

     <div>
        {notenames.map(note => {
            return (
                <>
                <input key={note} type="checkbox" id={note} name={note} value={note} /> {note}
                </>  
            )
        }) }
      </div>
      </div>
    );
  }

  export default Checkboxes;