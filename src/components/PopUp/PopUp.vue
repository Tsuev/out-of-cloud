<template>
    <transition name="fade">
        <div v-show="isShow" class="backdrop">
            <div class="form-wrapper p-2 position-absolute">
                <form v-on:submit.prevent="onSubmit">
                    <label for="inp" class="mb-2">Email</label>
                    <input v-model="email" id="inp" type="email" class="form-control mb-4" placeholder="Введите email">
                    <transition name="fade">
                        <div v-show="showMessage" class="message mb-3">Спасибо!</div>
                    </transition>
                    <div class="d-flex justify-content-end">
                        <button @click="showPopUp" type="button" class="btn btn-secondary">Закрыть</button>
                        <button class="btn btn-primary ms-2" type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data(){
        return {
            email: '',
            showMessage: false
        }
    },
    computed: mapState(['isShow']),
    methods: {
        ...mapMutations(['showPopUp']),

        async onSubmit(){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST' });
            if (res.ok) { 
                console.log(this.email);
                this.showMessage = true
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .form-wrapper{
        width: 400px;
        box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
        border-radius: 10px;
        background: white;
    }
    .backdrop{
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: rgba($color: #000000, $alpha: 0.3);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .message{
        display: flex;
        justify-content: center;
        font-family: RotondaC, sans-serif;
        font-weight: bold;
        color: rgb(0, 116, 29);
    }
</style>