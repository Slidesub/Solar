<template>
    <ul class="uploader">
        <input type="file" @change="changeFile" multiple style="display: none;"></input>
        <li v-on:click="addFile">
            +
        </li>
    </ul>
</template>
<script>
    import Vue from 'vue'
    import http from '@/api/fetch';
    export default {
        name: 'Uploader',
        props: {
        },
        data () {
            return {
                files: [],
                target: '',
                ali: "<li v-on:click='addFile'>+</li>"
            }
        },
        methods: {
            addFile (e) {
                e.preventDefault();
                this.target = e.target;
                this.$el.querySelector('input').click();
            },
            changeFile (e) {
                if (!e.target.files.length) {
                    return;
                }
                this.createFile(e.target.files);
            },
            createFile (files) {
                let that = this;
                for (let i = 0; i < files.length; i++) {
                    if (this.checkFile(files[i])) {
                        let reader = new FileReader();
                        reader.readAsDataURL(files[i]);
                        reader.onload = function (e) {
                            that.target.style.backgroundImage = 'url(' + e.target.result + ')';
                            that.files.push(e.target.result);

                            let MyComponent = Vue.extend({
                                template: '<li>+</li>'
                            });
                            let component = new MyComponent().$mount();
                            that.$el.appendChild(component.$el);
                        }
                    } else {
                        this.files.push(files[i]);
                    }
                }
            },
            uploadFile (file) {
                let form = new FormData();
                form.append(file);
                http.fetchPost(url, form).then(res => {
                    this.files.push(file);
                }).catch(error => {
                    
                });
            },
            checkFile (file) {
                if (/(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.type)) {
                    return true;
                } else {
                    return false;
                }
            }

        }
    }
</script>
<style scoped>
    .uploader {
        height: 100%;
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
    }
    .uploader li {
        width: 5rem;
        height: 5rem;
        line-height: 5rem;
        background-size: 5rem 5rem;
        text-align: center;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
        border: 1px dotted #000;
    }
</style>