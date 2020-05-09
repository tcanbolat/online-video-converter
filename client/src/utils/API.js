import axios from "axios";

export default {
  convertFile: (videoinfo) => {
    return axios.post("/convert", (videoinfo));
  },

};
