
// programmatically generating scales based on scale type 'definitions' 

// the array we send back to app.js
let scaleData = [];

//  'definitions' for the major and minor scale interval pattern with distance from root
const minor = {
    "type": "Minor",
    "definition": [2,3,5,7,8,10]
}

const major = {
    "type": "Major",
    "definition": [2,4,5,7,9,11]
}

// function to build individual scales from definitions
function ScaleBuilder(root, type) {
    // all possible notes, doubled so that we don't ever iterate past the end of the array.
    const notes = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", 
                   "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"];
    let scaleDefi = type.definition;
    let startNote = notes.findIndex((note) => note === root);
    let generatedScale =[];

        generatedScale.push(notes[startNote]);
            scaleDefi.forEach(n => {
            generatedScale.push(notes[startNote + n]);
            })

// generate the object for use in the app 
        return {
         "id": `${root} ${type.type}`,
         "display": true,
         "scale": `${root} ${type.type}`, 
         "root": root,
         "type": type.type,
         "notes": generatedScale
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

// call the functions to generate the scales
GenerateAllScales(minor);
GenerateAllScales(major);

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

