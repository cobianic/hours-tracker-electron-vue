import Vue from "vue";
import VueRouter from "vue-router";
import HoursLog from "@/views/HoursLog.vue";
import Projects from "@/views/Projects.vue";
import TimeEntry from "@/views/TimeEntry.vue";
import ProjectEntry from "@/views/ProjectEntry";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hours Log",
    component: HoursLog
  },
  {
    path: "/add-time-entry",
    name: "TimeEntry",
    component: TimeEntry
  },
  {
    path: "/add-project-entry",
    name: "ProjectEntry",
    component: ProjectEntry
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
