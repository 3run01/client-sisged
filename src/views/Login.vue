<template>
  <v-app id="inspire">
    <Overlay />
    <Snackbar />
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center" class="mb-0">
          <v-col cols="12" md="3">
            <v-img
              src="/img/logo.png"
              width="350px"
              align="center"
              class="ml-12"
              justify="center"
              position="center center"
            ></v-img>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card outlined>
              <v-toolbar flat>
                <v-toolbar-title>Entrar</v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        :href="source"
                        icon
                        large
                        target="_blank"
                        v-on="on"
                      >
                        <v-icon>mdi-code-tags</v-icon>
                      </v-btn>
                    </template>
                    <span>Source</span>
                  </v-tooltip> -->
              </v-toolbar>
              <form @submit.prevent="login">
                <!-- <v-card-text>
                  <v-text-field
                    label="Login"
                    v-model="dadosLogin.email"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="dadosLogin.senha"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                  ></v-text-field>
                </v-card-text> -->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" outlined @click="login()">Login</v-btn>
                </v-card-actions>
              </form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import sessaoService from "@/services/sessaoService";
import Overlay from "@/components/shared/Overlay";
import Snackbar from "@/components/shared/Snackbar";

export default {
  components: {
    Overlay,
    Snackbar,
  },
  data() {
    return {
      dadosLogin: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    login() {
      const query = {
        client_id: process.env.VUE_APP_CLIENTE_ID,
        redirect_uri: process.env.VUE_APP_REDIRECT_URL,
        response_type: "code",
        scope: "",
        state: this.$helper.generateString(40),
      };

      const url = `http://localhost:8000/oauth/authorize?client_id=${query.client_id}&redirect_uri=${query.redirect_uri}&response_type=${query.response_type}&scope=${query.scope}&state=${query.state}"`
      
      window.location.assign(url)
    },
  },
  created() {
    this.login()
  },
};
</script>
