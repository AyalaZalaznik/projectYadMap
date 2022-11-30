using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Left
    {
        public List<LeftData> LeftData { get; set; }
    }
    public class LeftData
    {
        public string title { get; set; }
        public string tag { get; set; }
        public string infoText { get; set; }
        public List<mainImage> mainImage { get; set; }
    }
    public class mainImage
    {
        public string id { get; set; }
        public string title { get; set; }
        public string text { get; set; }
        public string description { get; set; }
        public string credit { get; set; }
        public string source { get; set; }
        public string url { get; set; }
        public string images { get; set; }



    }

    //    public class Left
    //    {
    //        public List<righteousList> righteousList { get; set; }
    //    }
    ////public class leftD
    //{
    //    public string title { get; set; }
    //    public string tag { get; set; }
    //    public string infoText { get; set; }

    //}

    //public class righteousList
    //{
    //    public string title { get; set; }
    //    public List<details> details { get; set; }

    //}
    //public class details
    //{
    //    public string title { get; set; }
    //    public List<values> value { get; set; }

    //}
    //public class values
    //{
    //    public string id { get; set; }
    //    public string value { get; set; }
    //    public string url { get; set; }

    //}


}
