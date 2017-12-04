<template>
    <div class="article-create">
        <form>
            <div class="row">
                <input type="text" v-model='title' placeholder="title"/>
            </div>
            <div>
                <selection :options="options" v-model='tags'></selection>
            </div>
            <div>
                <uploader></uploader>
            </div>
            <div>
                <editor v-model='body'></editor>
            </div>
            <div><input type="text" v-model='body'/></div>
            <div><input type="text" v-model='tags'/></div>
            <div>
                <button>save</button>
                <button @click="publish">publish</button>
            </div>
        </form>
    </div>
</template>
<script>
import Editor from '@/components/Editor';
import Selection from '@/components/Selection';
import Uploader from '@/components/Uploader';
import http from '@/api/fetch';
export default {
    data () {
        return {
            title: '',
            icon: '',
            tags: 'b',
            body: '',
            options: [
                {text: 'one', value: 'a'},
                {text: 'two', value: 'b'},
                {text: 'three', value: 'c'}
            ]
        }
    },
    created () {
        this.fetchData();
    },
    methods: {
        fetchData () {
            http.fetchGet('http://127.0.0.1:5000/tag/list/', {}).then(res => {
                this.options = res.data;
            }).catch(error => {
                console.log(error);
            });
        },
        publish () {
            let data = {
                title: this.title,
                icon: this.icon,
                tags: this.tags,
                body: this.body
            }
            http.fetchPost('http://127.0.0.1:5000/article/edit/', data).then(res => {
                this.$router.push({name: 'ArticleList'});
            }).catch(e => {
                console.log(e);
            });
        }
    },
    components: {
        Editor, Selection, Uploader
    }
}
</script>
<style scoped>
    .row {
        border: 1px solid #bbb;
        border-radius: 4px;
        margin: 1rem 0;
    }
    input {
        width: calc(100% - 2rem);
        height: 2rem;
        border: none;
        padding: 0 1rem;
    }
</style>
