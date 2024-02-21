using JamUtility.Models;
using Microsoft.AspNetCore.Components;

namespace JamUtility.Components
{
    public partial class ScaleCard
    {
        [Parameter]
        public Scale? scale { get; set; }
    }
}