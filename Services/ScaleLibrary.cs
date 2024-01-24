using JamUtility.Models;

namespace JamUtility.Services;

public class ScaleLibrary : IScaleLibrary
{
    List<Scale> Scales = new List<Scale>();
    List<Note> Notes = new List<Note>();
    public ScaleLibrary()
    {
    }

    public List<Scale> GetScales()
    {
        return Scales;
    }

    public List<Note> GetNotes()
    {
        return Notes;
    }
}
