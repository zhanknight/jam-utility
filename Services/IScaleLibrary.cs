using JamUtility.Models;

namespace JamUtility.Services
{
    public interface IScaleLibrary
    {
        List<Scale> InitializeScales();
        List<string> GetAllNotes();
        List<Scale> GetActiveScales();
        void SetSelectedNotes(List<string> notes);
        List<string> GetSelectedNotes();
        void ClearSelectedNotes();
    }
}