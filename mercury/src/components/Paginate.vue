<template>
    <div class="paginate">
        <ul>
            <li>{{index}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "paginate",
    data () {
        return {
            index: 1,
            size: 8,
            count: 0
        }
    }
}
</script>
