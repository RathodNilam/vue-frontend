<template>
<div>
  <Header></Header>

  <section class="book_section layout_padding">
    <b-container>
        <div class="booksection_heading">
           <h2>
                Book A Table
           </h2> 
        </div>
        <!-- <div class="row"> -->
        <!-- <div class="col-md-6"> -->
          <!-- <div class="form_container"> -->
            <b-row>
                <b-col md="6">
                    <b-container class="form_container">
            <form action="">
              <div>
                <input type="text" class="form-control" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" class="form-control" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" class="form-control" placeholder="Your Email" />
              </div>
              <div>
                <select class="form-control nice-select wide">
                  <option value="" disabled selected>
                    How many persons?
                  </option>
                  <option value="">
                    2
                  </option>
                  <option value="">
                    3
                  </option>
                  <option value="">
                    4
                  </option>
                  <option value="">
                    5
                  </option>
                </select>
              </div>
              <div>
                <input type="date" class="form-control">
              </div>
             <!--  <div class="btn_box">
                <button>
                  Book Now
                </button>
              </div> -->
              <b-button class="btn-booktableordernow">Order Now</b-button>
            </form>
      </b-container>
    </b-col>

    <b-col md="6">
        <!-- <div class="map_container "> -->
            <b-container class="map_container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.086399799456!2d72.9846471!3d21.6993691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be02756ea78d017%3A0x7b48554054c58580!2sNexis%20Infotech!5e0!3m2!1sen!2sin!4v1643114991076!5m2!1sen!2sin" width="600" height="430" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </b-container>
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
    name:'booktable',
    components:{
        Header,
        Footer,
    }
  }
    
</script>

<style>
    .booksection_heading{
   position: relative;
    /* margin-bottom: 0; */
    color: black;
    top: 10px;
    left: 141px;
    font-family: cursive;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 40px;
    }

    .book_section .form_container .form-control {
    width: 100%;
    border: none;
    height: 50px;
    margin-bottom: 25px;
    padding-left: 25px;
    border: 1px solid #999;
    outline: none;
    color: #000000;
    border-radius: 5px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.btn-booktableordernow{
    display: block;
    margin: 0 auto;
    background-color: #ffbe33;
  border: 2px solid #ffbe33;
   margin-top: 10px;
}
.map_container {
    height: 100%;
    min-height: 100%;
    width: 100%;
        position: relative;
    overflow: hidden;
     margin-top: 10px;
}
</style>