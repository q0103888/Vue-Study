<template>
  <div>
    <p v-if="requiresAuth">
      <router-link :to="{path:'/signin'}">Singin</router-link>
    </p>
  </div>
</template>

<script>
import memoApi from '../apis/memos'

  export default {
    name: 'Home',
    data(){
      return {
        memos:[],
      }
    },
    mounted(){
      memoApi.getMemos()
      .then(res=>{
        this.memos = res.data
      })
      .catch(()=>{
      })
    }
    }
</script>
