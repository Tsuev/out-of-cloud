<template>
  <div class="container-fluid p-0 d-flex justify-content-center align-items-center">
    <div class="wrapper">
      <Carousel/>
      <div class="row justify-content-center">
        <ButtonPopUp/>
      </div>
    </div>
    <PopUp/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel.vue'
import ButtonPopUp from '@/components/Button/ButtonPopUp.vue'
import PopUp from '@/components/PopUp/PopUp.vue'
export default {
  components: {
    Carousel,
    ButtonPopUp,
    PopUp
  },

}
</script>

<style lang="scss">
  .container-fluid{
    height: 100vh;
  }
  @font-face {
    font-family: "RotondaC";
    src: url("../assets/fonts/rotondac.otf") format("woff");
    font-weight: normal;
  }
  @font-face {
    font-family: "RotondaC";
    src: url("../assets/fonts/rotondac-bold.otf") format("woff");
    font-weight: bold;
  }
</style>