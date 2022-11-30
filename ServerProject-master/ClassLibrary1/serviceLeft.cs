using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class serviceLeft
    {
        const string leftjsonDataPath = "Left.json";

        public LeftData GetData()
        {
            var Left = GetLeftData();
            return Left.LeftData.FirstOrDefault();
        }

        public Left GetLeftData()
        {
            var json = File.ReadAllText(leftjsonDataPath);
            var LeftList = JsonConvert.DeserializeObject<Left>(json);
            return LeftList;
        }
    }
}
