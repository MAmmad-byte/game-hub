import axios from "axios";

export default axios.create({
  params: {
    key: "56dedad34da64d0bbe557276caec1c3f",
  },
  baseURL: "https://api.rawg.io/api",
});
