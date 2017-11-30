<template>
    <div class="tag">
        <select>
            <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'Tag',
    props: {
        options: {
            type: Array,
            default: []
        }
    },
    data () {
        
    }
}
</script>
<style>

</style>

