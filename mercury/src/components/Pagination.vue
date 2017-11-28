<template>
    <div class="pagination">
        <ul>
            <li>
                <button :disabled="this.index == 1" @click="prev"><</button>
            </li>
            <li>{{index}}</li>
            <li>...</li>
            <li>{{pageCount}}</li>
            <li>
                <button :disabled="this.index == this.pageCount" @click="next">></button>
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
            index: this.pageIndex
        }
    },
    methods: {
        prev () {
            this.index --;
            console.log(this.index);
            this.$emit("update:pageIndex", this.index);
        },
        next () {
            this.index ++;
            this.$emit("update:pageIndex", this.index);
        },
        go (index) {
            this.index = index;
            this.$emit("update:pageIndex", this.index);
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
