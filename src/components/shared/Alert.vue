<template>
    
    <v-alert
    text
    prominent
    :type="alertStore.typeAlert"
    v-if="alertStore.status"
    >
        <ul v-for="e in alertStore.errors">
            <li>{{e}}</li>
        </ul>
    </v-alert>

</template>

<script>
    export default{
        data(){
            return {}
        },
        computed:{
            alertStore(){
                 return this.$store.getters.getAlert
            }
        },
        created(){
        }
    }
</script>