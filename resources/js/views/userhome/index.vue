<template>
  <div>
    <!-- header section start -->
    <Header></Header>
    <!-- header section end -->

    <!-- main section start -->
   <main>
    <div class="bg-img">
    </div>
  </main>

    <!-- main section end -->

    <!-- footer section start -->
    <Footer></Footer>
    <!-- footer section end -->
  </div>
</template>

<script>
// import Nav from "../../components/Nav";

import Header from "../../components/user/header.vue";
import Footer from "../../components/user/footer.vue";
import { BImg, BButton} from 'bootstrap-vue';

export default {
  name: "UserHome",
  components: {
    Header,
    Footer,
    BImg,
    BButton,
  },
};
</script>

<style>
  .bg-img{
  background: url(/images/hero-bg.jpg) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  /*margin-top: -107px;*/
  overflow: hidden;
  }

  .btn-ordernow{
    height: 45px;
    width: 190px;
    position: absolute;
    top: 50%;
    left: 10%;
    background: #ffbe33;
    border: 2px solid #ffbe33;
    font-size: 16px;
    padding: 10px 0;
    text-align: center;
}

</style>
