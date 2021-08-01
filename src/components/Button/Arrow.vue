<template>
    <div @click='leaf'  class="arrow mx-4" :class="{rotate: rotateActive}">
        <svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L2 22L22 42" stroke="#D0D5CD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<script>
export default {
    props: ['rotateActive'],
    methods: {
        leaf(){
            this.$emit('leaf')
        }
    }
}
</script>

<style lang="scss">
    .arrow{
        cursor: pointer;
    }
    .rotate{
        transform: rotate(180deg);
    }
</style>