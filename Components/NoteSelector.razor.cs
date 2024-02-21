using Microsoft.AspNetCore.Components;

namespace JamUtility.Components
{
    public partial class NoteSelector
    {
        [Parameter]
        public EventCallback<string> ParentMethod { get; set; }

        List<string> allNotes = new List<string>();

        List<string> localSelectedNotes = new List<string>();

        protected override void OnInitialized()
        {
            allNotes = ScaleLibrary.GetAllNotes();
            localSelectedNotes = ScaleLibrary.GetSelectedNotes();
        }

        private void ToggleSelected(string note)
        {
            if (localSelectedNotes.Contains(note))
            {
                localSelectedNotes.Remove(note);
                ScaleLibrary.SetSelectedNotes(localSelectedNotes);
            }
            else
            {
                localSelectedNotes.Add(note);
                ScaleLibrary.SetSelectedNotes(localSelectedNotes);
            }
        }

        private async Task CallMethodParent(string clickedNote)
        {
            ToggleSelected(clickedNote);
            if (ParentMethod.HasDelegate)
            {
                await ParentMethod.InvokeAsync();
            }
        }
    }
}