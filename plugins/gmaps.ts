import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCCxZoaNmITajjGzK4ulA9DfRdahkaDIa0",
    libraries: "places"
  }
});
