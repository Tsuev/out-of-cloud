<template>
    <transition :name="direction" mode="out-in">
        <div v-show="activeSlide === index" class="slide">
            <div class="d-flex flex-column h-100 justify-content-center">
                <img class="mx-auto d-block" :src="require(`@/assets/img/${photoPath}`)" alt="">
                <div class="number position-absolute bg-white">
                    {{index + 1}}
                </div>
                <div class="text-block text-center">
                    <h5>Привезём точно по списку</h5>
                    <p>
                        Сборщик берëт с собой наручный терминал, 
                        на котором он видит весь список покупок для каждого заказа.
                    </p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['photoPath', 'activeSlide', 'index', 'direction']
}
</script>

<style lang='scss' scoped>
    .number{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 46px;
        text-align: center;
        color: #7db945;
        top: 10px;
        left: 35px;
        font-family: RotondaC, sans-serif;
        font-weight: bold;
    }
    .text-block{
        margin-top: 28px;
        padding: 0 80px;
        h5{
            font-family: RotondaC, sans-serif;
            font-weight: bold;
        }
        p{
            font-style: normal;
            font-size: 16px;
            line-height: 24px;
        }
    }
    .slide-left-enter-active {
        animation: slide-left-in 0.4s;
    }
    .slide-left-leave-active {
        animation: slide-left-out 0.4s;
    }
    @keyframes slide-left-in{
        from  { transform: translateX(-100%); opacity: 0;}
        to { transform: translateX(0); opacity: 1;} 
    }
    @keyframes slide-left-out{
        from  { transform: translateX(0%); opacity: 1;}
        to { transform: translateX(100%); opacity: 0;} 
    }
    
    .slide-right-enter-active {
        animation: slide-right-in 0.4s;
    }
    .slide-right-leave-active {
        animation: slide-right-out 0.4s;
    }
    @keyframes slide-right-out{
        from  { transform: translateX(0%); opacity: 1;}
        to { transform: translateX(-100%); opacity: 0;} 
    }
    @keyframes slide-right-in{
        from  { transform: translateX(100%); opacity: 0;}
        to { transform: translateX(0); opacity: 1;} 
    }
    .slide {
        position:absolute;
        top: 15%;
        left: 6%;
        bottom:0;
        right:0;
        width: 640px;
        height: 450px;
        background: #FFFFFF;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

</style>