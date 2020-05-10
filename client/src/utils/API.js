import axios from "axios";

export default {
  convertFile: function (videoinfo) {
    return axios.post("/convert", (videoinfo), {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },

};
