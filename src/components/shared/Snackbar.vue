<template>

    <v-snackbar
      v-model="snackbarStore.status"
      :bottom="y === 'bottom'"
      :color="snackbarStore.color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="snackbarStore.timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
          {{ snackbarStore.text }}
      <v-btn
        dark
        text
        @click="close"
      >
        Fechar
      </v-btn>
    </v-snackbar>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        color: '',
        mode: '',
        snackbar: true,
        text:'',
        timeout: 6000,
        x: null,
        y: 'top',
      }
    },
    computed:{
      snackbarStore(){
        return this.$store.getters.getSnackbar
      }
    },
    methods:{
      close(){
        this.$store.commit('snackbarDisabled', false)
      }
    }
  }
  </script>