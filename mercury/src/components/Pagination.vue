<template>
    <div class="pagination">
        <ul>
            <li>
                <button :disabled="this.pageIndex == 1" @click="prev"><</button>
            </li>
            <li>{{pageIndex}}</li>
            <li>...</li>
            <li>{{pageCount}}</li>
            <li>
                <button :disabled="this.pageIndex == this.pageCount" @click="next">></button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        pageIndex: {
            // current page
            type: Number,
            default: 1
        },
        PageSize: {
            // page size
            type: Number,
            default: 5
        },
        pageCount: {
            // page count
            type: Number,
            default: 1
        }
    },
    data () {
        return {

        }
    },
    methods: {
        prev () {
            this.pageIndex --;
        },
        next () {
            this.pageIndex ++;
        },
        go (index) {
            this.pageIndex = index;
        }
    },
    computed: {
    }
}
</script>

<style scoped>
.pagination ul {
    list-style: none;
    display: flex;
    flex-direction: row;
}
li {
    margin: 0 1rem;
}
</style>
