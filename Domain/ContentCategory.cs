using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public enum ContentCategory
    {
        [Description("Deception revealed by certain gestures")]
        VisualCue = 1,
        [Description("General behavioral indicators for a dishonest person")]
        DeceptiveAttitude = 2,
        [Description("Deception revealed by language used")]
        VerbalCue = 3,
        [Description("General Information about the lying phenomenon")]
        Other = 4
    }
}
