// programmatically generating scales based on scale type 'definitions' 

// the array we send back to app.js
let scaleData = [];

//  'definitions' for scales in interval pattern with distance from root 
const minor = {"type": "Minor", "definition": [2,3,5,7,8,10], "chords": ["Min","Dim","Maj","Min","Min","Maj","Maj"]}
const major = {"type": "Major", "definition": [2,4,5,7,9,11], "chords": ["Maj","Min","Min","Maj","Maj","min","Dim"]}
const dorian = {"type": "Dorian", "definition": [2,3,5,7,9,10], "chords": ["Min","Min","Maj","Maj","Min","Dim","Maj"]}
const phrygian = {"type": "Phrygian", "definition": [1,3,5,7,8,10], "chords": ["Min","Maj","Maj","Min","Dim","Maj","Min"]}
const lydian = {"type": "Lydian", "definition": [2,4,6,7,9,11], "chords": ["Maj","Maj","Min","Dim","Maj","Min","Min"]}
const mixolydian = {"type": "Mixolydian", "definition": [2,4,5,7,9,10], "chords": ["Maj","Min","Dim","Maj","Min","Min","Maj"]}
const locrian = {"type": "Locrian", "definition": [1,3,5,6,8,10], "chords": ["Dim","Maj","Min","Min","Maj","Maj","Min"]}

const allDefinitons = [minor, major, dorian, phrygian, lydian, mixolydian, locrian]

// function to build individual scales from definitions
function ScaleBuilder(root, type) {
    // all possible notes, doubled so that we don't ever iterate past the end of the array.
    const notes = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", 
                   "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"];
    let scaleDefi = type.definition;
    let chordDefi = type.chords;
    let startNote = notes.findIndex((note) => note === root);
    let generatedScale =[];
    let generatedChords =[];

        generatedScale.push(notes[startNote]);
            scaleDefi.forEach(n => {
            generatedScale.push(notes[startNote + n]);
            })

        generatedScale.forEach((n, index) => {
            generatedChords.push(n + chordDefi[index])
        })    

// generate the object for use in the app 
        return {
         "id": `${root} ${type.type}`,
         "display": true,
         "scale": `${root} ${type.type}`, 
         "root": root,
         "type": type.type,
         "notes": generatedScale,
         "chords": generatedChords
        };
}

// function to generate every possible scale for every possible root
function GenerateAllScales(type) {
   const notes = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"]
   
        notes.forEach (n => {
             scaleData.push(ScaleBuilder(n, type));
         })
//    console.log(scaleData);
}

// call the function for each definition to generate the scales
allDefinitons.forEach(i => {
    GenerateAllScales(i)
})

// function to randomize location of scales in the array
function randomizeScaleData() {
    let m = scaleData.length, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        [scaleData[m], scaleData[i]] = [scaleData[i], scaleData[m]];
    }
//    console.log(scaleData);
}
// call it
randomizeScaleData();

export {scaleData, ScaleBuilder, major};

