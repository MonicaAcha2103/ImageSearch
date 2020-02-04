import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 225ab2caaacd9705e47fbd80c950b38d8393b7c66fb9fab0054ea43dd17e8177"
  }
});
