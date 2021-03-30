<template>
  <b-container class="hours-log-page">
    <b-row class="mt-5 mb-4">
      <b-col sm="8" offset-sm="2">
        <b-row>
          <b-col>
            <h1>Hours Log</h1>
          </b-col>
          <b-col>
            <b-btn
              variant="success"
              @click="$router.push({ name: 'TimeEntry' })"
              >+ Add Entry</b-btn
            >
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-table striped hover :fields="fields" :items="entries" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import moment from "moment";

export default {
  name: "HoursLog",
  components: {},
  data() {
    return {
      fields: ["startDate", "endDate"]
    };
  },
  computed: {
    ...mapState(["timeEntries"]),
    entries() {
      return this.timeEntries.map(entry => {
        return {
          ...entry,
          startDate: moment(entry.startDate).format("Do MMMM YYYY, h:mm"),
          endDate: moment(entry.endDate).format("Do MMMM YYYY, h:mm")
        };
      });
    }
  },
  mounted() {
    this.readTimeEntries();
  },
  methods: {
    ...mapActions(["readTimeEntries"])
  }
};
</script>
