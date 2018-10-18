import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FileUpload from '@/components/upload/FileInput'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/file-upload',
      name: 'FileUpload',
      component: FileUpload,

    }
  ]
})
