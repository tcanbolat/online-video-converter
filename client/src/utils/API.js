import axios from "axios";

export default {
  convertFile: function (videoinfo) {
    return axios.post("/convert", (videoinfo));
  },

};
