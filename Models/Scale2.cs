namespace JamUtility.Models;

public class ScaleDefinition
{
    public int Id { get; set; }
    public string Type { get; set; }
    public List<int> Definition { get; set; }
    public List<string> Chords { get; set; }
    
}
