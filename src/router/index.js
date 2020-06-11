import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Layout from "../views/Layout.vue";
import FleaNav from "../views/fleamarket/FleaNav.vue";
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
        path: "/order",
        name: "Order",
        component: () => import("../views/errand/Order.vue")
      }
    ]
  },
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
        name: "/Reward",
        component: () => import("../views/fleamarket/Reward.vue")
      },
      {
        path: "/list",
        name: "/List",
        component: () => import("../views/fleamarket/List.vue")
      },
      {
        path: "/sell",
        name: "/Sell",
        component: () => import("../views/fleamarket/Sell.vue")
      },
      {
        path: "/fleaMy",
        name: "/FleaMy",
        component: () => import("../views/fleamarket/FleaMy.vue")
      }
    ]
  },
  {
    path: "/personal",
    name: "Personal",
    component: () => import("../views/fleamarket/personal/Personal.vue")
  },
  {
    path: "/personaldetail",
    name: "PersonaDetail",
    component: () => import("../views/fleamarket/personal/PersonalDetail.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
