<template>
    <v-layout>
        <v-flex>
            <v-toolbar flat>
                <h3 class="font-weight-light black--text">{{title}}</h3>
            </v-toolbar>
            <v-container>
                <slot></slot>
            </v-container>
        </v-flex>
    </v-layout>
</template>
<script>
    export default{
        props: ['title']
    }
</script>