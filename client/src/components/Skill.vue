<template>
  <div class="columns is-vcentered is-centered is-mobile">
    <div class="column is-8">
      <b-progress
        type="is-primary"
        :value="percentage"
        show-value
        format="percent"
      ></b-progress>
    </div>
    <div class="column is-4-mobile is-2-tablet has-text-left">
      <p class="is-size-5 has-text-white">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    percentage: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>
