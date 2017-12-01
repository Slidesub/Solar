<template>
    <div class="selection">
        <select v-model="selected" @change="update($event.target.value)">
            <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'Selection',
    model: {
        prop: 'selectedValue',
        event: 'change'
    },
    props: {
        options: {
            type: Array,
            default: []
        },
        selectedValue: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            selected: this.selectedValue
        }
    },
    methods: {
        update (value) {
            this.selected = value;
            this.$emit('change', value);
        }
    }
}
</script>
<style>

</style>

