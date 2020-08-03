import axios from "axios";

const url = "/api/contact";

export default {
  post(data) {
    return axios.post(url, data);
  }
};
