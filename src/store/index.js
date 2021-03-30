import Vue from "vue";
import Vuex from "vuex";

import PouchDB from "pouchdb";

import router from "@/router";

Vue.use(Vuex);

let timeEntriesDB = new PouchDB("timeEntries");
let projectEntriesDB = new PouchDB("projectEntries");

export default new Vuex.Store({
  state: {
    timeEntries: [],
    projectEntries: []
  },
  mutations: {
    setTimeEntries(state, payload) {
      state.timeEntries = payload.map(entry => {
        return entry.doc;
      });
    },
    setProjectEntries(state, payload) {
      state.projectEntries = payload.map(entry => {
        return entry.doc;
      });
    }
  },
  actions: {
    async readTimeEntries({ commit }) {
      const docs = await timeEntriesDB.allDocs({
        include_docs: true
      });
      commit("setTimeEntries", docs.rows);
    },
    // eslint-disable-next-line no-empty-pattern
    async createTimeEntry({}, payload) {
      try {
        const response = await timeEntriesDB.post({ ...payload });
        console.log("Success! ", response);
        router.push({ name: "HoursLog" });
      } catch (err) {
        console.error(err);
      }
    },
    async readProjectEntries({ commit }) {
      const docs = await projectEntriesDB.allDocs({
        include_docs: true
      });
      commit("setProjectEntries", docs.rows);
    },

    // eslint-disable-next-line no-empty-pattern
    async createProjectEntry({}, payload) {
      try {
        const response = await projectEntriesDB.post({ ...payload });
        console.log("Success! ", response);
        router.push({ name: "Projects" });
      } catch (err) {
        console.error(err);
      }
    }
  },
  modules: {}
});
