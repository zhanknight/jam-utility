namespace JamUtility.Models;

public class Scale
{
    public int id { get; set; }
    public string Root { get; set; }
    public string Type { get; set; }
    public List<string> Notes { get; set; } = new List<string>();
    public List<string> Chords { get; set; } = new List<string>();
    
}
