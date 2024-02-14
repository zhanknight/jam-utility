using JamUtility.Models;

namespace JamUtility.Services
{
    public interface IScaleLibrary
    {
        List<Note> GetNotes();
        Task<List<Scale>> GetScalesAsync();
        Task FilterScales(List<string> notes);
    }
}