<template>
    <div class="carousel d-flex align-items-center justify-content-center">
        <Arrow
            @leaf="prev"
        />
        <div class="cour">
            <CorouselSlide 
                v-for="(photo, index) in slides" 
                :index="index"
                :key="photo.id"
                :photoPath="photo.path"
                :activeSlide="activeSlide"
                :direction="direction"
            />
        </div>
        <Arrow
            @leaf="next"
            :rotateActive="true"
        />
    </div>
</template>

<script>
import CorouselSlide from './CorouselSlide.vue'
import Arrow from '../Button/Arrow.vue'
export default {
    data() {
        return {
            slides: [
                { id: 0, path: 'image1.png' },
                { id: 1, path: 'image3.png' },
                { id: 2, path: 'image5.png' },
                { id: 3, path: 'image6.png' },
            ],
            activeSlide: 0,
            direction: '',
        }
    },

    methods: {
        next(){
            this.activeSlide >= this.slides.length - 1 ? this.activeSlide = 0 : this.activeSlide++;
            this.direction = 'slide-left'
        },
        prev(){
            this.activeSlide <= 0 ? this.activeSlide = this.slides.length - 1 : this.activeSlide--;
            this.direction = 'slide-right'
        }
    },
    components: {
        CorouselSlide,
        Arrow
    }
}
</script>

<style>
    .cour{
        position:relative;
        overflow: hidden;
        width: 740px;
        height: 650px;
        z-index:10;
        padding: 40px;
    }
</style>