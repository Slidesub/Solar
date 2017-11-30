<template>
    <div class="article-create">
        <form>
            <div class="row"><input type="text" v-model='title' placeholder="title"/></div>
            <div class="row">
                <tag :option="options"></tag>
            </div>
            <div class="row"><input type="file" /></div>
            <div>
                <simple-editor v-model='body' ></simple-editor>
                <div><input type="text" v-model='body'/></div>
            </div>
        </form>
    </div>
</template>
<script>
import SimpleEditor from '@/components/SimpleEditor';
import Tag from '@/components/Tag';
export default {
    data () {
        return {
            title: '',
            icon: '',
            tags: '',
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
        SimpleEditor, Tag
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
