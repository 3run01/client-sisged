<template>
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  computed: {},
  methods: {
    callback() {
      axios
        .post(`http://localhost:8000/oauth/token`, {
          grant_type: "authorization_code",
          client_id: process.env.VUE_APP_CLIENTE_ID,
          client_secret: process.env.VUE_APP_CLIENTE_SECRET,
          redirect_uri: process.env.VUE_APP_REDIRECT_URL,
          code: this.$route.query.code,
        })
        .then((res) => {
          console.log("dados callback", res.data);
          sessionStorage.setItem("tokenSSO", res.data.access_token);
          this.getUserSSO(res.data.access_token);
        })
        .catch((e) => console.log(e));
    },
    getUserSSO(accessToken) {
      axios
        .get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          this.login(res.data);
          console.log("getUserSSO", res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    login(data) {
      axios
        .post("http://localhost:8001/api/auth/login", data)
        .then((res) => {
          sessionStorage.setItem(
            "accessToken",
            JSON.stringify(res.data.access_token)
          );
          console.log(res.data);
        })
        .catch((e) => console.log(e));
    },
  },
  created() {
    // console.log(this.$route.query.state)
    this.callback();
  },
};
</script>
