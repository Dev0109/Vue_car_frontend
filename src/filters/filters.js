import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY");
  }
});

Vue.filter("USD", function(value) {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 0
  });
  return `USD ${formatter.format(value)}`;
});

Vue.filter("litresPer100km", function(value) {
  if (value) {
    return Math.round((100 * 3.785411784) / (1.609344 * value));
  }
});

Vue.filter("lbsToKg", function(value) {
  if (value) {
    return Math.round(value * 0.45359237);
  }
});

Vue.filter("getUserName", function(str) {
  if (str) {
    return str.match(/^([^@]*)@/)[1];
  }
});
