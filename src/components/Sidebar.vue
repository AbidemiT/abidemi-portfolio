<template>
  <div>
    <div class="menu">
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
      cancel: false
    }
  }
}
</script>


<style>
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
</style>

