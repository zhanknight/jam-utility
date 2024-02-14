using JamUtility.Models;
using JamUtility.Utilities;
using System.Linq;

namespace JamUtility.Services;

public class ScaleLibrary : IScaleLibrary
{
    List<Scale> AllScales = new List<Scale>();
    List<Scale> FilteredScales = new List<Scale>();
    List<Note> Notes = new List<Note>();
    public ScaleLibrary()
    {
        AllScales = ScaleBuilder.BuildScales();
        FilteredScales = AllScales;
    }

    public async Task<List<Scale>> GetScalesAsync()
    {

        return FilteredScales;
    }

    public async Task FilterScales(List<string> notes)
    {

        var y = AllScales.Where(a => notes.All(itm2 => a.Notes.Contains(itm2))).ToList();

        FilteredScales = y;
    }

    public List<Note> GetNotes()
    {
        return Notes;
    }
}
