<template>
  <div class="page home">
    <div class="container">
      <div class="holder">
        <p class="heading" data-aos="fade-down" data-aos-duration="500">
          Good {{ greeting }}! I'm
        </p>
        <h1 class="name" ref="name" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
          Jeffrey Happel
        </h1>
        <p class="heading" data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
          A front-end developer
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { gsap } from "gsap";

export default defineComponent({
  name: 'Home',
  computed: {
    greeting(): String {
      const now: Date = new Date();
      const hours: Number = now.getHours();

      let greet: String;
      hours >= 0 && hours < 6
        ? (greet = "night")
        : hours >= 6 && hours < 12
          ? (greet = "morning")
          : hours >= 12 && hours < 18
            ? (greet = "afternoon")
            : hours >= 18 && hours < 24
              ? (greet = "evening")
              : (greet = "day");
      return greet;
    },
  },
  mounted() {
    this.animateIn();
  },
  methods: {
    animateIn() {
      gsap.fromTo(this.$refs.name, {
        rotationY: 90,
      }, {
        rotationY: 0,
        duration: 1
      })
    }
  }
})
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #12151f;
}

.container {
  height: 100%;
}

.holder {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: #efefef;
}

.heading {
  text-transform: uppercase;
}

.name {
  margin: 4px 0;
  text-transform: uppercase;
  color: #05f4b7;
}
</style>