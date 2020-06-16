import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Layout from "../views/Layout.vue";
import JobNav from "../views/Job/JobNav.vue";
import FleaNav from "../views/fleamarket/FleaNav";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: () => import("../views/person/Feedback.vue")
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Index",
        component: () => import("../views/main/Index.vue")
      },
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/main/Index.vue")
      },
      {
        path: "/addressbook",
        name: "AddressBook",
        component: () => import("../views/main/AddressBook.vue")
      },
      {
        path: "/information",
        name: "Information",
        component: () => import("../views/main/Information.vue")
      },

      {
        path: "/my",
        name: "My",
        component: () => import("../views/main/My.vue")
      }
    ]
  },
  {
    path: "/jobnav",
    name: "JobNav",
    component: JobNav,
    children: [
      {
        path: "/position",
        name: "Position",
        component: () => import("../views/Job/Position.vue")
      },
      {
        path: "/company",
        name: "Company",
        component: () => import("../views/Job/Company.vue")
      },
      {
        path: "/jobmessage",
        name: "JobMessage",
        component: () => import("../views/Job/JobMessage.vue")
      },
      {
        path: "/jobmy",
        name: "JobMy",
        component: () => import("../views/Job/JobMy.vue")
      }
    ]
  },
  {
    path: "/jobsearch",
    name: "JobSearch",
    component: () => import("../views/Job/JobSearch.vue")
  },
  {
    path: "/jobscreen",
    name: "JobScreen",
    component: () => import("../views/Job/JobScreen.vue")
  },
  {
    path: "/alumnusindex",
    name: "AlumnusIndex",
    component: () => import("../views/Alumnus/AlumnusIndex.vue")
  },
  {
    path: "/alumnusmessage",
    name: "AlumnusMessage",
    component: () => import("../views/Alumnus/AlumnusMessage.vue")
  },
  {
    path: "/alumnuscollect",
    name: "AlumnusCollect",
    component: () => import("../views/Alumnus/AlumnusCollect.vue")
  },
  {
    path: "/publish",
    name: "Publish",
    component: () => import("../views/Alumnus/Publish.vue")
  },
  {
    path: "/metrocard",
    name: "MetroCard",
    component: () => import("../views/card/MetroCard.vue")
  },
  {
    path: "/campuscard",
    name: "CampusCard",
    component: () => import("../views/card/CampusCard.vue")
  },
  {
    path: "/electriccharge",
    name: "ElectricCharge",
    component: () => import("../views/card/ElectricCharge.vue")
  },
  {
    path: "/paylist",
    name: "PayList",
    component: () => import("../views/card/PayList.vue")
  },
  {
    path: "/network",
    name: "Network",
    component: () => import("../views/card/Network.vue")
  },
  {
    path: "/losscard",
    name: "LossCard",
    component: () => import("../views/card/LossCard.vue")
  },
  {
    path: "/exam",
    name: "Exam",
    component: () => import("../views/exam/Exam.vue")
  },
  {
    path: "/library",
    name: "Library",
    component: () => import("../views/library/Library.vue")
  },
  {
    path: "/update",
    name: "Update",
    component: () => import("../views/other/Update.vue")
  },
  {
    path: "/gender",
    name: "Gender",
    component: () => import("../views/other/Gender.vue")
  },
  {
    path: "/address",
    name: "Address",
    component: () => import("../views/other/Address.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/other/About.vue")
  },
  {
    path: "/city/:Id/:Address",
    name: "City",
    component: () => import("../views/other/City.vue")
  },
  {
    path: "/DistrictAndCounty/:Id/:City",
    name: "DistrictAndCounty",
    component: () => import("../views/other/DistrictAndCounty.vue")
  },
  {
    path: "/message",
    name: "Message",
    component: () => import("../views/main/Message.vue")
  },
  {
    path: "/olderphone",
    name: "OlderPhone",
    component: () => import("../views/other/OlderPhone.vue")
  },
  {
    path: "/newphone",
    name: "NewPhone",
    component: () => import("../views/other/NewPhone.vue")
  },
  {
    path: "/newphonecode/:Phone",
    name: "NewPhoneCode",
    component: () => import("../views/other/NewPhoneCode.vue")
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: () => import("../views/schedule/Schedule.vue")
  },
  {
    path: "/base",
    name: "Base",
    component: () => import("../views/person/Base.vue")
  },
  {
    path: "/insertaddress",
    name: "InsertAddressBook",
    component: () => import("../views/main/InsertAddressBook.vue")
  },
  // 跑腿路由搭建
  {
    path: "/errandshomepage",
    name: "Errandshomepage",
    component: () => import("../views/errand/Errandshomepage.vue")
  },
  {
    path: "/personalcenter",
    name: "Personalcenter",
    component: () => import("../views/errand/Personalcenter.vue")
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/errand/Order.vue"),
    children: [
      {
        path: "all",
        name: "All",
        component: () => import("../views/errand/orders/All.vue")
      },
      {
        path: "underway",
        name: "Underway",
        component: () => import("../views/errand/orders/Underway.vue")
      }
    ]
  },
  {
    path: "/originadress",
    name: "OriginAdress",
    component: () => import("../views/errand/adressorder/OriginAdress.vue")
  },
  {
    path: "/destinationadress",
    name: "DestinationAdress",
    component: () => import("../views/errand/adressorder/DestinationAdress.vue")
  },
  // 跳蚤市场路由
  {
    path: "/fleaNav",
    name: "FleaNav",
    component: FleaNav,
    children: [
      {
        path: "/",
        name: "HomePage",
        component: () => import("../views/fleamarket/HomePage.vue")
      },
      {
        path: "/homePage",
        name: "HomePage",
        component: () => import("../views/fleamarket/HomePage.vue")
      },
      {
        path: "/reward",
        name: "Reward",
        component: () => import("../views/fleamarket/reward/Reward.vue")
      },
      {
        path: "/list",
        name: "List",
        component: () => import("../views/fleamarket/List.vue")
      },
      {
        path: "/fleaMy",
        name: "FleaMy",
        component: () => import("../views/fleamarket/my/FleaMy.vue")
      }
    ]
  },
  {
    path: "/sell",
    name: "Sell",
    component: () => import("../views/fleamarket/Sell.vue")
  },
  {
    path: "/personal/:id",
    name: "Personal",
    component: () => import("../views/fleamarket/personal/Personal.vue")
  },
  {
    path: "/pay",
    name: "Pay",
    component: () => import("../views/fleamarket/sell/Pay.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/fleamarket/Search.vue")
  },
  {
    path: "/personal",
    name: "Personal",
    component: () => import("../views/fleamarket/personal/Personal.vue")
  },
  {
    path: "/personaldetail",
    name: "PersonalDetail",
    component: () => import("../views/fleamarket/personal/PersonalDetail.vue")
  },
  {
    path: "/commoditydetails/:id",
    name: "CommodityDetails",
    component: () =>
      import("../views/fleamarket/commodity/CommodityDetails.vue")
  },
  {
    path: "/listdetail/:id",
    name: "ListDetail",
    component: () => import("../views/fleamarket/commodity/ListDetail.vue")
  },
  {
    path: "/personaldetail",
    name: "PersonalDetail",
    component: () => import("../views/fleamarket/personal/PersonalDetail.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/fleamarket/Search.vue")
  },
  {
    path: "/myrelease",
    name: "MyRelease",
    component: () => import("../views/fleamarket/my/MyRelease.vue")
  },
  {
    path: "/mybuy",
    name: "MyBuy",
    component: () => import("../views/fleamarket/my/MyBuy.vue")
  },
  {
    path: "/mysell",
    name: "MySell",
    component: () => import("../views/fleamarket/my/MySell.vue")
  }
];
const router = new VueRouter({
  routes
});

export default router;
