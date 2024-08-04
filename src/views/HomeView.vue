<template>
  <div class="home">
    <HeaderShayna/>
    <CarouselShayna/>
    <CarouselProduct/>
    <InstaShayna/>
    <LogoPatners/>
    <FooterShayna/>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderShayna from '@/components/HeaderShayna.vue';
import CarouselShayna from '@/components/CarouselShayna.vue';
import CarouselProduct from '@/components/CarouselProduct.vue';
import InstaShayna from '@/components/InstaShayna.vue';
import LogoPatners from '@/components/LogoPatners.vue';
import FooterShayna from '@/components/FooterShayna.vue';



export default {
  name: 'HomeView',
  components: {
    HeaderShayna,
    CarouselShayna,
    CarouselProduct,
    InstaShayna,
    LogoPatners,
    FooterShayna,

  }
}
</script>
