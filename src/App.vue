<template>
  <div id="app">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>


<style >
@import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap');

html,
body {
  font-family: 'Montserrat', sans-serif;
/* font-family: 'Roboto', sans-serif; */
  background-color: #303030;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Montserrat', sans-serif;
/* font-family: 'Roboto', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}


@media (min-width:768px){
  .about,.home,.portfolio,.skill,.contact {
  position: absolute;
  width: 60%;
  top: 60px;
  margin-left: 30%;
}

#more-about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

#port {
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 10px;
}
}
</style>
