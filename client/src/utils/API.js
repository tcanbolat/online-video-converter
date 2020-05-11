import axios from "axios";

export default {
  convertFile: function (videoinfo) {
    return axios.post("/convert", (videoinfo), {
      responseType: "blob",
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  },

};
