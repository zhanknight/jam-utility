using JamUtility.Models;

namespace JamUtility.Utilities;

public static class ScaleBuilder
{
    public static  List<Scale> BuildScales()
    {
        List<Scale2> definitions = new List<Scale2>();

        Scale2 minor = new Scale2 { Id = 1, Type = "Minor", Definition = [2, 3, 5, 7, 8, 10], Chords = ["Min", "Dim", "Maj", "Min", "Min", "Maj", "Maj"] };
        Scale2 major = new Scale2 { Id = 2, Type = "Major", Definition = [2, 4, 5, 7, 9, 11], Chords = ["Maj", "Min", "Min", "Maj", "Maj", "min", "Dim"] };
        Scale2 dorian = new Scale2 { Id = 2, Type = "Dorian", Definition = [2, 3, 5, 7, 9, 10], Chords = ["Min", "Min", "Maj", "Maj", "Min", "Dim", "Maj"] };
        Scale2 phrygian = new Scale2 { Id = 3, Type = "Phrygian", Definition = [1, 3, 5, 7, 8, 10], Chords = ["Min", "Maj", "Maj", "Min", "Dim", "Maj", "Min"] };
        Scale2 lydian = new Scale2 { Id = 4, Type = "Lydian", Definition = [2, 4, 6, 7, 9, 11], Chords = ["Maj", "Maj", "Min", "Dim", "Maj", "Min", "Min"] };
        Scale2 mixolydian = new Scale2 { Id = 5, Type = "Mixolydian", Definition = [2, 4, 5, 7, 9, 10], Chords = ["Maj", "Min", "Dim", "Maj", "Min", "Min", "Maj"] };
        Scale2 locrian = new Scale2 { Id = 6, Type = "Locrian", Definition = [1, 3, 5, 6, 8, 10], Chords = ["Dim", "Maj", "Min", "Min", "Maj", "Maj", "Min"] };

        definitions.AddRange(new List<Scale2> { minor, major, dorian, phrygian, lydian, mixolydian, locrian });




        List<string> allnotes = new List<string> 
                   { "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab",
                   "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab" };

        
        List<Scale> builtScales = new List<Scale>();
            for (int i = 0; i < 11; i++)
        {

            foreach (var s in definitions) 
                    { 
                        Scale newscale = new Scale();
                        var startNote = allnotes[i];
                        newscale.Notes.Add(startNote);
                        newscale.Root = startNote;
                        newscale.Type = s.Type;
                        foreach (var n in s.Definition)
                        {
                            newscale.Notes.Add(allnotes[n + i]);
                        }
                        foreach (var c in newscale.Notes)
                        {
                            newscale.Chords.Add(c + s.Chords);
                        }
                        builtScales.Add(newscale);
                    }
        }
        return builtScales.OrderBy(x => Random.Shared.Next()).ToList();
        
    } 

}
