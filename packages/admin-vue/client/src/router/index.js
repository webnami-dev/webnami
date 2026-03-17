import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/AppLayout.vue";
import PostsView from "../views/PostsView.vue";
import PostEditView from "../views/PostEditView.vue";
import PagesView from "../views/PagesView.vue";
import PageEditView from "../views/PageEditView.vue";
import SettingsView from "../views/SettingsView.vue";

const routes = [
  {
    path: "/admin",
    component: AppLayout,
    children: [
      { path: "", redirect: "/admin/posts" },
      { path: "posts", component: PostsView },
      { path: "posts/:slug", component: PostEditView },
      { path: "pages", component: PagesView },
      { path: "pages/:slug", component: PageEditView },
      { path: "settings", component: SettingsView },
    ],
  },
  { path: "/", redirect: "/admin/posts" },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
