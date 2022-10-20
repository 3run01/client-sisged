import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    vueLoad: false,
    user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null,
    token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null,
    overlay: false,
    snackbar: {
        text: '',
        color: '',
        status: false,
        timeout: 6000
    },
    alert: {
        typeAlert: '',
        status: false,
        errors: []
    },

},
  mutations: {
    setVueLoad(state, status) {
      state.vueLoad = status;
    },
    setUser(state, n) {
      state.user = n;
    },
    setOverlay(state, n){
      state.overlay = n
    },
    snackbarError(state, text){
      state.snackbar.status = true
      state.snackbar.text = text
      state.snackbar.color = 'error'
    },
    
    snackbarSuccess(state, text){
      state.snackbar.status = true
      state.snackbar.text = text
      state.snackbar.color = 'success'
    },
    snackbarInfo(state, text){
      state.snackbar.status = true
      state.snackbar.text = text
      state.snackbar.color = 'info'
    },
    snackbarDisabled(state, status){
      state.snackbar.status = false
      state.snackbar.text = ''
      state.snackbar.color = ''
    },
    alertError(state, errors){
      state.alert.typeAlert = 'error'
      state.alert.status = true
      state.alert.errors = errors
      setTimeout(() => {
        state.alert.status = false
      }, 8000)
    },
    alertSuccess(state, messages){
      state.alert.typeAlert = 'success'
      state.alert.status = true
      state.alert.errors = messages
      setTimeout(() => {
        state.alert.status = false
      }, 8000)
    },
    setDrawer(state){
      // state.drawer = status
      if(state.drawer){
        state.drawer = false
      }else{
        state.drawer = true
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getDrawer: state => state.drawer,
    getUser: state => state.user,
    getToken: state => state.token,
    getOverlay: state => state.overlay,
    getAlert: state => state.alert,
    getSnackbar: state => state.snackbar,
  },
})
