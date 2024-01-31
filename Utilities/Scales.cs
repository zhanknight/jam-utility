using JamUtility.Models;


public class Scales
{

    public static List<Scale> GetScales()
    {
        List<Scale> scales = new List<Scale>();
        scales.Add(new Scale { id = 1, Root = "C", Type = "Major", Notes = new List<Note> { new Note { id = 1, Name = "C" }, new Note { id = 2, Name = "D" }, new Note { id = 3, Name = "E" }, new Note { id = 4, Name = "F" }, new Note { id = 5, Name = "G" }, new Note { id = 6, Name = "A" }, new Note { id = 7, Name = "B" } } });
        scales.Add(new Scale { id = 2, Root = "C", Type = "Minor", Notes = new List<Note> { new Note { id = 1, Name = "C" }, new Note { id = 2, Name = "D" }, new Note { id = 3, Name = "Eb" }, new Note { id = 4, Name = "F" }, new Note { id = 5, Name = "G" }, new Note { id = 6, Name = "Ab" }, new Note { id = 7, Name = "Bb" } } });
        scales.Add(new Scale { id = 3, Root = "C", Type = "Pentatonic", Notes = new List<Note> { new Note { id = 1, Name = "C" }, new Note { id = 2, Name = "D" }, new Note { id = 3, Name = "E" }, new Note { id = 4, Name = "G" }, new Note { id = 5, Name = "A" } } });
        scales.Add(new Scale { id = 4, Root = "C", Type = "Blues", Notes = new List<Note> { new Note { id = 1, Name = "C" }, new Note { id = 2, Name = "Eb" }, new Note { id = 3, Name = "F" }, new Note { id = 4, Name = "Gb" }, new Note { id = 5, Name = "G" }, new Note { id = 6, Name = "" } } });
    return scales;
    }

}
