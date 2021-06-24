<template>
  <div class="page home">
    <div class="container">
      <div class="holder">
        <p class="heading" data-aos="fade-down" data-aos-duration="500">
          Good {{ greeting }}! I'm
        </p>
        <h1
          class="name"
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Jeffrey Happel
        </h1>
        <p
          class="heading"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="500"
        >
          A front-end developer
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #12151f;

  .container {
    height: 100%;

    .holder {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      color: #efefef;

      .heading {
        text-transform: uppercase;
      }

      .name {
        margin: 4px 0;
        text-transform: uppercase;
        color: #05f4b7;
      }
    }
  }
}
</style>>

</style>
