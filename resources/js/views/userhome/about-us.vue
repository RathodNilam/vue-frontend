<template>
  <div>
  <Header></Header>
<section class="img layout_padding">
<b-container>
  <b-row>
    <b-col sm="6" md="6" data-aos="fade-left" class="mt-4"> 
      <b-img src="/images/about-img.png" width="400px" height="550px" class="whatwedoimg" data-aos="fade-left"></b-img>
    </b-col>
    <b-col>
      <div class="detail-box">
        <div class="heading_container">
          <h2>We Are Feane</h2>
        </div>
        <p class="about-detail">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          in some form, by injected humour, or randomised words which don't look even slightly believable. If you
          are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
          the middle of text. All
        </p>
      </div>
      <div class="readMore-button">
        <b-button class="btn-readmore" pill>Read More</b-button>
      </div>
    </b-col>
  </b-row>
</b-container>
</section>

  <Footer></Footer>
</div>
</template>

<script>
import Header from "../../components/user/header.vue";
import Footer from "../../components/user/footer.vue";
  export default{
    name:'about',
    components:{
      Header,
      Footer,

    }  
  }
</script>

<style>
.img{
  background-color: #222831;
}
.heading_container{
  color: white;
  position: relative;
  top: 160px;
}
.about-detail{
  color: white;
  position: relative;
  top: 180px;
  font-size: 20px;
}
.btn-readmore{
  position: relative;
  top: 200px;
  background-color: #ffbe33;
  border: 2px solid #ffbe33;
}
h2{
  font-family: 'Dancing Script', cursive !important;
}
</style>
