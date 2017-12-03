<template>
    <ul class="uploader">
        <input type="file" @change="changeFile" multiple style="display: none;"></input>
        <li ref='imgli' :index="index" v-on:click="addFile" v-for="(f, index) in files">
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
                files: [''],
                target: 0
            }
        },
        methods: {
            addFile (e) {
                e.preventDefault();
                this.target = parseInt(e.target.getAttribute('index'));
                this.$el.querySelector('input').click();
            },
            changeFile (e) {
                if (!e.target.files.length) {
                    return;
                }
                this.createFile(e.target.files);
                this.$el.querySelector('input').value = "";
                // this.$el.querySelector('input').change();
            },
            createFile (files) {
                let that = this;
                for (let i = 0; i < files.length; i++) {
                    if (this.checkFile(files[i])) {
                        let reader = new FileReader();
                        reader.readAsDataURL(files[i]);
                        reader.onload = function (e) {
                            // that.target = that.target + i;
                            that.$refs.imgli[that.target].style.backgroundImage = 'url(' + e.target.result + ')';
                            that.files[that.target] = e.target.result;
                            if (that.target == that.files.length - 1) {
                                that.files.push('');
                                that.target ++;
                            } else if (that.target < that.files.length - 1) {
                                that.target ++;
                            }
                        }
                    } else {
                        setTimeout(function(file) {
                            that.$refs.imgli[that.target].innerHTML = file.name;
                            that.files[that.target] = file;
                            if (that.target == that.files.length - 1) {
                                that.files.push('');
                                that.target ++;
                            } else if (that.target < that.files.length - 1) {
                                that.target ++;
                            }
                        }, 0, files[i]);
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
        margin: 1rem 0;
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    }
    .uploader li {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
        width: calc(100% / 4 - 2px);
        height: 5rem;
        background-size: 5rem;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
        border: 1px dotted #000;
        border-radius: 4px;
    }
</style>