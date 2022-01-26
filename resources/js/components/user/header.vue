<template>
  <div>
     <div class="container-fluid header">
        <b-navbar toggleable="lg">
          <div class="navbar-brand">
          <router-link to="/" class="menu-link header-link">Feane</router-link>
          </div>
            <b-navbar-toggle target="nav-collapse" class="navbar-toggle"></b-navbar-toggle>
                <b-collapse class="navbar" id="nav-collapse" is-nav >
                <b-navbar-nav class="ms-auto menu navbar">
                <router-link to="/" class="menu-link header-link">Home</router-link>
                <router-link to="/menu" class="menu-link header-link">Menu</router-link>
                <router-link to="/about" class="menu-link header-link">About</router-link>
                <router-link to="/booktable" class="menu-link header-link">Book Table</router-link>
                <!-- <router-link to="/contact" class="menu-link header-link">Contact</router-link> -->
                <!-- </div> -->
                <div class="user_option">
                  <router-link to="" class="user_link">
              <!-- <a href="" class="user_link"> -->
                <i class="fa fa-user" aria-hidden="true"></i>
              </router-link>
            </div>
            <form class="form-inline">
                <b-button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </b-button>
              </form>
                 <a class="cart_link" href="#">
                  <b-icon icon="cart-fill" aria-hidden="true"></b-icon>
                </a>
              <a href="" class="order_online">
                Order Online
              </a>

            </b-navbar-nav> 


            <!-- <router-view></router-view> -->
        </b-collapse>
        </b-navbar>
    </div>
      <!-- <p>All rights reserved @ Good odds LLC 2022</p> -->

    </div>
  <!-- </div> -->
</template>

<script>
// import AOS from 'aos';
// import 'aos/dist/aos.css';

  export default{
    name:'header',

    // created(){
    //   AOS.init({ 
    //   // disable: "phone",
    //   duration:1000,
    //   easing: "ease",
    // });
    // },

  }

</script>

<style>

.header{
 box-shadow: 0px 5px 15px #00000029;

  position: sticky;
  top: 0px;
  background-color: black;
  /*position: fixed; */
  /*position: relative;*/

}

/*.navbar-nav {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  list-style: none;
}*/
.navbar{
  padding: 5px;
  display: flex;
  justify-content: flex-end;
}
.header-link {
  color: white;
  text-decoration: none;
  background-color: transparent;
  display: inline-block;
  margin-right: 40px;
  font-weight: 400;
  font-size: larger;
}
.navbar-toggle{
  border-color: #f8f9fa !important;
}
.header-link:hover{
  color: #cebd70;
  text-decoration: none;
  display:inline-block;

}
.user_link{
  color: white;
  padding: 10px;
}
.user_link:hover{
   color: white;
  padding: 10px;
}

.nav_search-btn{
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  color: #ffffff;
  margin: 0 10px;
  background-color: black;
  margin: 10px;
}
.nav_search-btn:hover{
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  color: white;
  margin: 0 10px;
  background-color: black; 
}

.order_online{
  display: inline-block;
  padding: 8px 30px;
  background-color: #ffbe33;
  color: #ffffff;
  border-radius: 45px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
}

.order_online:hover{
  color:white !important;
  text-decoration: none;
}
.cart_link{
  padding-right: 10px;
  color:#ffbe33 ;
}
.navbar-brand{
  font-family: cursive;
  padding-left: 200px;
}

  

</style>