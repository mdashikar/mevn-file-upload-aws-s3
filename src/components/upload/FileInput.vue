<template>
    <div>
        <nav-bar></nav-bar>
        <router-view></router-view>
        <div class="container">
            <div class="notification is-success" v-if="isSuccess">
                <button class="delete" @click="isSuccess = false"></button>
                  {{message}}  
            </div>
            <div class="field">
                <div class="file is-info has-name">
                    <label class="file-label">
                    <input class="file-input" type="file" @change="onFileChanged" multiple>
                    <span class="file-cta">
                        <span class="file-icon">
                        <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                        Upload file…
                        </span>
                    </span>
                    <span class="file-name" v-if="photos">
                        {{photos.name}}
                    </span>
                    </label>
                </div>
                
            </div>
            <a class="button is-success" :class="{'is-loading': value > 0, 'is-large': value > 0}" @click="uploadFile">Upload</a>
            
        </div>
    </div>
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

            photos: null,
            value: null,
            isSuccess: false,
            message: ''
        }
    },
    methods:{
        onFileChanged (event) {
            this.photos = event.target.files[0]
        },
        
        uploadFile(){
            const formData = new FormData()
            formData.append('photos', this.photos, this.photos.name)
            axios.post(`${window.endpoint}/upload`, formData, {
                onUploadProgress: progressEvent => {
                    this.value = progressEvent.loaded / progressEvent.total;
                }
            })
            .then(response => {
                console.log(response);
                this.isSuccess = true;
                this.message = response.data;
                this.value = 0;
                this.photos = null;

            }).catch(e => {
                console.log(e);
            })
        }
    },
    mounted(){
    }
}
</script>

<style>

</style>
