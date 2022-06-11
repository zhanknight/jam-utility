import { useState } from "react";

function Checkboxes(props) {
    const notenames = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"]
    const [interimNotes, setInterimNotes] = useState([])

// this function sends a selected note back to the parent component for filtering
    function setSelectedNotes(array) {
      props.setSelectedNotes(array);
    }

// this function pushes the note into the array
    function addNote(added) {
        interimNotes.push(added);
    }

// this function splices the specific note out of the array
    function removeNote(removed) {
      for( var i = 0; i < interimNotes.length; i++){ 
        if ( interimNotes[i] === removed) { 
            interimNotes.splice(i, 1); 
        }
    }
    }

// a function that checks for presence of note and adds or removes contextually.
    function noteToggle(clicked) {
      console.log(clicked);
      if (interimNotes.includes(clicked)) {
          removeNote(clicked);
      }
      else {
          addNote(clicked);
      } 
      console.log(interimNotes);
      setSelectedNotes([...interimNotes]);
      // this is only causing a render on the first click but works otherwise. not sure why. possibly because im modifying state directly?
      // OH! JS sees arrays as reference types! So it wasn't seeing a change WITHIN the array as a reason to update. Spreading creates a new ref!
    }
    
// a function for the reset button
    function resetButton() {
        setSelectedNotes([]);
        setInterimNotes([]);
    }

// map out a button for each note that calls noteToggle when clicked
    return (
        <div className="App-selectorbar"> <h4>Select notes to see scales that contain those notes.</h4>
        <div data-testid="buttons">
        {notenames.map(note => {
            if (interimNotes.includes(note)) {
            return (
                <button className="button-selected" key={note} onClick={() => {noteToggle(note)}}>{note}</button>
            )
            }
            else return (
                <button key={note} onClick={() => {noteToggle(note)}}>{note}</button>
            )
        }) }
        <button className="button-reset" onClick={() => {resetButton()}}>Reset</button>
      </div>
      </div>
    );
  }

  export default Checkboxes;
