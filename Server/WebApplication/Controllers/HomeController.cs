using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return RedirectToAction("Module1");
        }
        public ActionResult Module1()
        {
            return View();
        }

        public ActionResult Module2()
        {           
            return View();
        }
    }
}