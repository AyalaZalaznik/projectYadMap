using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Tab2Class
    {
        public List<tab2> tab2 { get; set; }

    }
    public class tab2 { 
        public string title { get; set; }
        public string url { get; set; }
        public string urlTitle { get; set; }
        public string type { get; set; }
        public List<elementss> elementss { get; set; }
    }
    public class elementss
    {
        public string id { get; set; }
        public string lastName { get; set; }
        public string firstName { get; set; }
        public string birthYear { get; set; }
        public string placeOfResidence { get; set; }
        public string source { get; set; }
        public string url { get; set; }


    }

}
