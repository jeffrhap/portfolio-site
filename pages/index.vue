<template>
  <div class="page home">
    <div class="container">
      <div class="holder">
        <p class="heading" ref="heading">
          Good {{ greeting }}! I'm
        </p>
        <h1 class="name" ref="name">
          Jeffrey Happel
        </h1>
        <p class="heading" ref="subtitle">
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
      // Animate heading
      gsap.from(this.$refs.heading, {
        y: -50,
        opacity: 0,
        duration: 0.5
      })

      // Animate name
      gsap.fromTo(this.$refs.name, {
        rotationY: 90,
      }, {
        rotationY: 0,
        delay: 0.3,
        duration: 1
      });

      // Animate subtitle
      gsap.from(this.$refs.subtitle, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: 0.6
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
  transform: rotateY('90deg');
}
</style>