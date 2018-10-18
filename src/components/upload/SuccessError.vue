<template>
    
</template>

<script>
import axios from 'axios'
import Home from '../Home.vue'

export default {
    components: {
        navBar: Home 
    },
     data(){
            return{
                contactList : [],
            }
        },
        methods:{
            // get fake user data from back-end
            getContactList(){
                //call API
                axios.get( ('http://otp.mdashikar.com/getdata')).
                    then( (res) => {
                        console.log(res)
                        this.contactList = res.data;
                    })
                    .catch( e => {
                        console.log(e)
                    })

            }
        },
        mounted(){
            // call this function on load 
            this.getContactList()
        }
}
</script>

<style>

</style>
