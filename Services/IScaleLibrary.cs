using JamUtility.Models;

namespace JamUtility.Services
{
    public interface IScaleLibrary
    {
        List<Note> GetNotes();
        List<Scale> GetScales();
    }
}