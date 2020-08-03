<template>
  <div
    class="columns is-vcentered is-mobile section-svg has-background-primary"
  >
    <div class="column is-full">
      <div
        class="columns is-mobile is-vcentered is-centered"
        :class="isMobile ? 'is-multiline' : ''"
      >
        <div
          class="column is-full-mobile is-5-tablet"
          v-if="svgPosition === 'left'"
        >
          <div
            v-html="require(`!html-loader!./../assets/${svgName}.svg`)"
            class="grow-hover"
          ></div>
        </div>
        <div
          class="column"
          :class="isMobile ? 'is-full-mobile is-5-tablet' : 'is-5'"
        >
          <h2 class="title is-size-1 is-size-3-mobile has-text-dark">
            {{ $t(title) }}
          </h2>
          <p class="is-size-4 is-size-6-mobile has-text-white">
            {{ $t(description) }}
          </p>
        </div>
        <div class="column is-5" v-if="svgPosition === 'right'">
          <div
            v-html="require(`!html-loader!./../assets/${svgName}.svg`)"
            class="grow-hover"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionSvgPrimary",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    svgName: {
      type: String,
      required: true
    },
    svgPosition: {
      type: String,
      default: "left"
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  }
};
</script>
