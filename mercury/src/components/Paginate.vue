<template>
    <div class="paginate">
        <ul>
            <li v-show="index > 1">{{PREV}}</li>
            <li>{{index}}</li>
            <li>{{index}}</li>
            <li>...</li>
            <li v-show="index > 0 && index < count">{{NEXT}}</li>
            <li v-show="count != 0">{{count}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "paginate",
    data () {
        return {
            index: 1, // page index
            size: 8, // page size
            count: 0 // page count
        }
    }
}
</script>
