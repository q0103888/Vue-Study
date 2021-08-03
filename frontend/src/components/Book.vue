<template>
    <v-container>
        <v-row>
            <v-col align="center">
                <h1>{{book.title}} <span style="color:#AAAAAA"> {{book.subtitle}}</span></h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-img contain max-height="250" :src="book.cover"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                <h3>작가: {{book.author}} <span v-if="book.translator">, 번역: {{book.translator}}</span> ,{{book.publisher}}</h3>
                <p>페이지: {{book.page}}, 가격: {{currency(book.price)}}, ISBN: {{book.ISBN}}</p>
                <p>{{book.info}}</p>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'

export default {
    name:"Book",
    data(){
        return { err_msg:"Error!", book:{}}
    },
    mounted(){
        const id= this.$route.params.bookId
        axios.get(`/api/books/${id}`)
        .then(response=>{
            this.book = response.data
        })
        .catch(err=>{
            this.err_msg = err.err_msg
        })
    },
    methods:{
        currency(value){
            let num = new Number(value)
            const result = new Intl.NumberFormat("ko-KR", {
                style:"currency",
                currency:"KRW"
            })
            .format(num);
            return result;
        }
    }
}
</script>