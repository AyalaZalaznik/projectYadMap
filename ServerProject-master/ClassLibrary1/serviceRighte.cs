using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class serviceRighte
    {
        const string RightejsonDataPath = "right.json";
        //tab1
        public righteData GetDataRighte()
        {
            var Righte = GetRighteData();
            return Righte.righteData.FirstOrDefault();
        }
        //tab2
        public tab2 GetTab2Data()
        {
            var T2 = DataTab2();
            return T2.tab2.FirstOrDefault();
        }
        //tab3
        public tab3 GetTab3Data()
        {
            var T3 = DataTab3();
            return T3.tab3.FirstOrDefault();
        }
        //tab1
        public Tab1 GetRighteData()
        {
            var json = File.ReadAllText(RightejsonDataPath);
            var RighteList = JsonConvert.DeserializeObject<Tab1>(json);
            return RighteList;
        }
        //tab2
        public Tab2Class DataTab2()
        {
            var json = File.ReadAllText(RightejsonDataPath);
            var RighteList = JsonConvert.DeserializeObject<Tab2Class>(json);
            return RighteList;
        }
        //tab3
        public Tab3Class DataTab3()
        {
            var json = File.ReadAllText(RightejsonDataPath);
            var RighteList = JsonConvert.DeserializeObject<Tab3Class>(json);
            return RighteList;
        }
    }
}
