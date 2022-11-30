using ClassLibrary1;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MyController : ControllerBase
    {
        serviceLeft l = new serviceLeft();
        serviceRighte r= new serviceRighte();   
    

        [HttpGet]
        public LeftData GetData()
        {
            return l.GetData();
        }
        [HttpGet]
        public righteData GetDataRighte()
        {
            return r.GetDataRighte();
        }
        [HttpGet]
        public tab2 GetTab2Data()
        {
            return r.GetTab2Data();
        }
        [HttpGet]
        public tab3 GetTab3Data()
        {
            return r.GetTab3Data();
        }

        //[HttpPost]
        //public bool UpdateAddress(CustomersList updateStreets)
        //{
        //    return s.UpdateAddress(updateStreets);
        //}
    }
}