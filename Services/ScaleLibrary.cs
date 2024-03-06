using JamUtility.Models;
using JamUtility.Utilities;

namespace JamUtility.Services;

public class ScaleLibrary : IScaleLibrary
{
    List<Scale> AllScales = new List<Scale>();
    List<Scale> FilteredScales = new List<Scale>();
    List<string> SelectedNotes = new List<string>();

    public ScaleLibrary()
    {
        AllScales = ScaleBuilder.BuildScales();
    }

    public List<Scale> InitializeScales()
    {
        FilteredScales = AllScales;
        return FilteredScales;
    }

    public List<string> GetAllNotes()
    {
        return ScaleBuilder.AllNotes().Distinct().ToList();
    }

    public void SetSelectedNotes(List<string> notes)
    {
        SelectedNotes = notes;
        FilterScales(SelectedNotes);
    }

    public List<string> GetSelectedNotes()
    {
        return SelectedNotes;
    }

    public void ClearSelectedNotes()
    {
        SelectedNotes.Clear();
        FilterScales(SelectedNotes);
    }

    public List<Scale> GetActiveScales()
    {
        return FilteredScales;
    }

    private void FilterScales(List<string> notes)
    {
        FilteredScales = AllScales.Where(a => notes.All(n => a.Notes.Contains(n))).ToList();
    }

}
