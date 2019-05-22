<template>
    <div>
        <Home></Home>
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <Skill></Skill>
    </div>
</template>

<script>
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Portfolio from "@/views/Portfolio.vue";
import Skill from "@/views/Skill.vue";

export default {
    components: {
        Home,
        About,
        Contact,
        Portfolio,
        Skill
    }
}
</script>
