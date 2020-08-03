<template>
  <div class="header-page fade-in">
    <div
      v-html="require(`!html-loader!./../assets/${svgName}.svg`)"
      class="grow-hover"
    ></div>
    <div
      style="position: absolute;"
      class="full-width full-height"
      :class="hideTitleMobile ? 'is-hidden-mobile' : ''"
    >
      <h1 class="title-overlay">Mauro Oliveira</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  props: {
    svgName: {
      type: String,
      required: true
    },
    hideTitleMobile: {
      type: Boolean,
      default: false
    }
  }
};
</script>
