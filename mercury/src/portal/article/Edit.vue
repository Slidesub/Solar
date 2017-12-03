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
                <button>publish</button>
            </div>
        </form>
    </div>
</template>
<script>
import Editor from '@/components/Editor';
import Selection from '@/components/Selection';
import Uploader from '@/components/Uploader';
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
    methods: {

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
