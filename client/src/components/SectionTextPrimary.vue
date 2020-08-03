<template>
  <div
    class="columns is-vcentered is-centered has-background-primary is-mobile section-primary"
  >
    <div class="column is-full-mobile is-9-tablet">
      <h2 class="title is-size-1 is-size-2-mobile has-text-dark">
        {{ $t(title) }}
      </h2>
      <p class="is-size-4 is-size-5-mobile has-text-white">
        {{ $t(description) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTextPrimary",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.section-primary {
  height: 110vh;
  max-width: 100vw;
  padding: 2rem;
  margin: 0;
  margin-top: 10vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
</style>
