<template>
    <div class="article-list">
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{error}}</div>
        <div v-if="articles">
            <ul>
                <li v-for="article in articles">
                    <a href="">{{article._id.$oid}}</a>
                </li>
            </ul>
        </div>
        <pagination></pagination>
    </div>
    
</template>

<script>
import Pagination from '@/components/Pagination'
import http from '@/api/fetch'
export default {
    name: 'ArticleList',
    data () {
        return {
            loading: false,
            articles: null,
            error: null,
            pageIndex: 1,
            pageSize: 10,
            pageNo: 5
        }
    },
    created () {
        this.fetchData();
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            this.error = this.articles = null;
            this.loading = true;
            http.fetchGet('http://127.0.0.1:5000/article/list', '').then(res => {
                this.loading = false;
                this.articles = res.data;
            }).catch(error => {
                this.loading = false;
                this.error = error;
            });
        }
    },
    components: {
        Pagination
    }
}
</script>

<style scoped>
.article-list {
    text-align: left;
}
.article-list ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.article-list a {
    text-decoration: none;
}

</style>