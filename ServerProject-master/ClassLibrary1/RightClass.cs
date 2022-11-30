using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Tab1
    {
        public List<righteData> righteData { get; set; }
    }
    public class righteData
    {
        public string title { get; set; }
        public string url { get; set; }
        public string urlTitle { get; set; }
        public string type { get; set; }
        public elements elements { get; set; }

        //public List<details> details { get; set; }

    }
    public class elements
    {
        public List<details> details { get; set; }
        public map map { get; set; }
        public links links { get; set; }
        //public string id { get; set; }
        //public string lastName { get; set; }
        //public string firstName { get; set; }
        //public string birthYear { get; set; }
        //public string placeOfResidence { get; set; }
        //public string source { get; set; }
        //public string url { get; set; }
        //public string title { get; set; }
        //public string text { get; set; }
        //public string description { get; set; }
        //public string credit { get; set; }
        //public List<images> images { get; set; }


    }
    public class images {
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

    public class map
    {
        public List<pointers> pointers { get; set; }
        public List<places> places { get; set; }

    }
    public class pointers
    {
        public string icon { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string title { get; set; }


    }
    public class places
    {
        public string lif { get; set; }
        public List<string> place { get; set; }
        public string point { get; set; }

    }
    public class links {
        public string title { get; set; }
        public List<valuee> valuee { get; set; }

    }
    public class valuee {
        public string id { get; set; }
        public string value { get; set; }
        public string url { get; set; }

    }


    public class details
    {
        public string title { get; set; }

        public List<valuee> valuee { get; set; }

    }
    //public class elementss
    //{
    //    public string id { get; set; }
    //    public string lastName { get; set; }
    //    public string firstName { get; set; }
    //    public string birthYear { get; set; }
    //    public string placeOfResidence { get; set; }
    //    public string source { get; set; }
    //    public string url { get; set; }

    //}

}
