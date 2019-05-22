<template>
  <div>
    <div id="top">
      <h2><span id="span">Tiamiyu</span> Sikiru Abidemi</h2>
      <div id="menu">
        <i class="fas fa-bars" v-if="burger" @click="bars"></i>
        <i class="fas fa-window-close" v-else @click="close"></i>
    </div>
    </div>
    <div :class="{menu: show, main:burger}">
      <router-link to="/"><i class="fas fa-home"></i> Home</router-link>
      <router-link to="/about"><i class="fas fa-user-alt"></i> About</router-link>
      <router-link to="/skill"><i class="fas fa-tools"></i> Skill Set</router-link>
      <router-link to="/portfolio"><i class="fas fa-briefcase"></i> Works</router-link>
      <router-link to="/contact"><i class="fas fa-envelope"></i> Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            burger: true,
            cancel: false,
            show: false
        }
    },
    methods: {
        bars() {
            this.burger = false;
            this.cancel = true;
            this.show = true;
        },
        close() {
            this.burger = true;
            this.cancel = false;
            this.show = false;
        }
    }
}
</script>


<style>
#top {
  display: grid;
  grid-template-columns: 2fr 0.2fr;
  padding: 8px;
  grid-gap: 20px;
  place-items: center;
  text-transform: uppercase;
}

#span {
    color: #38ce59;
}
.main {
  display: none;
}
 .menu{
    font-weight: bold;
    background-color: #fff;
    width: 100vw;
    margin-left: 0;
  }

  .menu a {
    padding: 15px;
    display: block;
    text-decoration: none;
    color: rgb(31, 31, 31);
    letter-spacing: 3px;
    font-variant: small-caps;
  }
  .menu a:hover{
    padding: 15px;
    display: block;
    text-decoration: none;
    color: white;
    background-color: #38ce59;
  }
  .menu a:active{
    padding: 15px;
    display: block;
    text-decoration: none;
    color: white;
    background-color: #38ce59;
  }

  @media (min-width: 768px) {
    #top {
      display: flex;
    }
    #menu {
      display: none;
    }

    .main{
      display: block;
    font-weight: bold;
    background-color: #fff;
    width: 20vw;
    margin-left: 0;
    height: 90vh;
  }

  .main a {
    padding: 15px;
    display: block;
    text-decoration: none;
    color: rgb(31, 31, 31);
    letter-spacing: 3px;
    font-variant: small-caps;
  }
  .main a:hover{
    padding: 15px;
    display: block;
    text-decoration: none;
    color: white;
    background-color: #38ce59;
  }
  .main a:active{
    padding: 15px;
    display: block;
    text-decoration: none;
    color: white;
    background-color: #38ce59;
  }
  }
</style>

