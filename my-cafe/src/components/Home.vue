<template>
    <div id="app">
        <h1>Welcome{{userId}}</h1>
        <v-text-field label="new user id" v-model="newId"></v-text-field>
        <v-btn @click="saveUserId" elevation="2">Save</v-btn>
        <v-btn @click="updateReviews" color="primary">Update</v-btn>
        <h1>{{reviewCount}}</h1>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in reviews" :key="item.id">
                        <td>{{item.name}}</td>
                        <td>{{item.body}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default{
    data(){
        return {newId:''}
    },
    computed:{
        // namesapced 가 설정되지 않은경우
        ...mapState({
            userId:state=>state.user.userId
        }),
        // namesaped 기 설정 된 경우 모듈명을 적는다.
        ...mapState('reviews', {
            reviews:state=>state.reviews
        }),
        ...mapGetters('reviews', ['reviewCount'])
    },
    methods:{
        ...mapMutations(['updateUserId']),
        ...mapActions('reviews', ['getReviews']),
        saveUserId(){
            this.$store.commit('updateUserId', this.newId)
        },
        updateReviews(){
            this.$store.dispatch('reviews/getReviews')
        }
    }
}
</script>
