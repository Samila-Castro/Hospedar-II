import {
  createWebHistory,
  // createWebHashHistory,
  createRouter,
} from "vue-router";
 
import Welcome from "../views/Welcome/";
import ClientCadastro from "../views/ClientCadastro/";
import BusinessCadastro from "../views/BusinessCadastro/";
import NotFound from "../views/NotFound";
 
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/client-cadastro",
    name: "ClientCadastro",
    component: ClientCadastro,
  },
  {
    path: "/business-cadastro",
    name: "BusinessCadastro",
    component: BusinessCadastro,
  },
  { path: "/:catchAll(.*)", component: NotFound }
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;