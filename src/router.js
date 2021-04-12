import Vue from "vue";
import Router from "vue-router";
import Form from "./components/Form_component.vue";
import BitCoin from "./components/BitCoinComponent.vue";
import Directive from "./components/DirectiveComponent.vue";
import Watch from "./components/WatchComponent.vue";
import Name from "./components/nameComponent.vue";
import QiitaApi from "./components/qiitaApiComponent.vue";
import ClassBinding from "./components/classBinding.vue";
import Handling from './components/eventhandlingConponent.vue';
import FormInput from "./components/formInputComponent.vue";
import Transition from "./components/transition-Component.vue";
import Users from "./components/vueRouterCompornent";
import profile from "./components/profileComponent";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    //ルーティングの設定
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: "/bitcoin",
      name: "bitcoin",
      component: BitCoin,
    },
    {
      path: "/directive",
      component: Directive,
    },
    {
      path: "/watch",
      component: Watch,
    },
    {
      path: "/name",
      component: Name,
    },
    {
      path: "/qiitaapi",
      component: QiitaApi,
    },
    {
      path: "/classbinding",
      component: ClassBinding,
    },
    {
      path: "/handling",
      component: Handling,
    },
    {
      path: "/forminput",
      component: FormInput,
    },
    {
      path: "/transition",
      component: Transition,
    },
    {
      path: "/users/:userId",
      name: "users",
      component: Users,
      children: [
        {
          path: "profile",
          name: "profile",
          component: profile
        }
      ]
    },


  ]
});
