using JamUtility.Models;

namespace JamUtility.Services
{
    public interface IScaleLibrary
    {
        List<Scale> InitializeScales();
        List<Scale> GetActiveScales();
        void FilterScales(List<string> notes);
    }
}