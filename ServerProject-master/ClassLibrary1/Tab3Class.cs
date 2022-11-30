using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Tab3Class
    {
        public List<tab3> tab3 { get; set; }

    }
    public class tab3
    {
        public string title { get; set; }    
        public string url { get; set; }
        public string urlTitle { get; set; }
        public string type { get; set; }

        public List<elementsss> elementsss { get; set; }
    }
    public class elementsss
    {
        public string id { get; set; }
        public string title { get; set; }
        public string text { get; set; }
        public string description { get; set; }
        public string credit { get; set; }
        public string source { get; set; }
        public string url { get; set; }


        public List<imagess> imagess { get; set; }
    }
    public class imagess
    {
        public string id { get; set; }
        public string title { get; set; }
        public string url { get; set; }
        public string thmbnl { get; set; }
        public List<string> mapPointers { get; set; }
        public string backImage { get; set; }
        public string type { get; set; }
        public string vertices { get; set; }
        public string credit { get; set; }
        public string relatedLink { get; set; }
        public string marksPoints { get; set; }

    }

}
