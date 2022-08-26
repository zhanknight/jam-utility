const scales = require('./Scales');

test('The scalebuilder function works', () => {
    let scalecheck = scales.ScaleBuilder("C", scales.major);
    expect(scalecheck).not.toBeNull();
    expect(scalecheck).toStrictEqual({"display": true, "id": "C Major", "notes": ["C", "D", "E", "F", "G", "A", "B"], "root": "C", "scale": "C Major", "type": "Major", "chords": ["CMaj", "DMin", "EMin", "FMaj", "GMaj", "Amin", "BDim"]});
  });

  test('The full scale array isnt empty', () => {
    expect(scales.scaleData).not.toBeNull();
  });

