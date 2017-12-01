<template>
    <div class="editor">
        <textarea v-bind:value="value" @input="update($event.target.value)"></textarea>
    </div>
</template>
<script>
import SimpleMDE from 'simplemde'
export default {
    name: 'Editor',
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    watch: {
        value: function(value) {
            if (value === this.simplemde.value()) {
                return;
            }
            this.simplemde.value(value);
        }
    },
    mounted () {
        const configs = {
            element: this.$el.querySelector('textarea'),
            initialValue: this.value,
            autofocus: true,
            blockStyles: {
		        bold: "__",
		        italic: "_"
            },
            placeholder: 'please enter ...',
            lineWrapping: true
        };
        this.simplemde = new SimpleMDE(configs);
        this.simplemde.codemirror.on('change', () => {
            this.$emit('input', this.simplemde.value())
        })
    },
    activated () {

    },
    destroyed () {
        this.simplemde.toTextArea();
        this.simplemde = null;
    },
    methods: {
        update (value) {
            this.$emit('input', value);
        }
    }
}
</script>
<style>
@import 'simplemde/dist/simplemde.min.css';
</style>
