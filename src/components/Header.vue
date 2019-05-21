<template>
  <div>
    <div id="top">
      <h2><span id="span">Tiamiyu</span> Sikiru Abidemi</h2>
      <div>
        <i class="fas fa-bars" v-if="burger" @click="bars"></i>
        <i class="fas fa-window-close" v-else @click="close"></i>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            burger: true,
            cancel: false
        }
    },
    methods: {
        bars() {
            this.burger = false;
            this.cancel = true;
        },
        close() {
            this.burger = true;
            this.cancel = false;
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
</style>

