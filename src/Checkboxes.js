function Checkboxes() {

    const notenames = ["a", "a#", "b", "c", "c#", "d,", "d#", "e", "f", "f#", "g", "g#"]
  
    return (
     <div>
        {notenames.map(note => {
            return (
                <>
                <input key={note} type="checkbox" id={note} name={note} value={note} /> {note}
                </>  
            )
        }) }
      </div>
    );
  }

  export default Checkboxes;