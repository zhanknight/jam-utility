using JamUtility.Models;
using JamUtility.Utilities;

namespace JamUtility.Services;

public class ScaleLibrary : IScaleLibrary
{
    List<Scale> AllScales = new List<Scale>();
    List<Scale> FilteredScales = new List<Scale>();

    public ScaleLibrary()
    {
        AllScales = ScaleBuilder.BuildScales();
    }

    public List<Scale> InitializeScales()
    {
        FilteredScales = AllScales;
        return FilteredScales;
    }

    public List<Scale> GetActiveScales()
    {
        return FilteredScales;
    }

    public void FilterScales(List<string> notes)
    {
        FilteredScales = AllScales.Where(a => notes.All(n => a.Notes.Contains(n))).ToList();
    }

}
