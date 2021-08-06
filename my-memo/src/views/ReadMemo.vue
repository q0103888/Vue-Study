<script>
import { memoApi } from '../apis/memos'

export default {
    data() {
        return {
            memo:{}
        }
    },
    mounted() {
        memoApi.getMemo(this.$route.params.memoId)
        .then(res=>{
            this.memo = res.data
            console.log(this.memo)
        })
        .catch(()=>{
        })
    }
}
</script>
