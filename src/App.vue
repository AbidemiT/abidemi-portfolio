<template>
  <div id="app">
    <Header></Header>
    <SideBar></SideBar>

    <Footer></Footer>
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    SideBar,
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
</style>
