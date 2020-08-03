<template>
  <b-carousel
    :autoplay="true"
    :pause-hover="true"
    :progress="true"
    :overlay="gallery"
    :indicator-inside="false"
    indicator-custom-size="is-small"
    indicator-mode="hover"
    indicator-style="is-dots"
    :pause-text="$t('work.paused')"
  >
    <b-carousel-item v-for="(screen, i) in list" :key="i">
      <a @click="switchGallery(true)" class="image">
        <img :src="screen.url" :title="$t(screen.title)" />
      </a>
    </b-carousel-item>
    <span
      v-if="gallery"
      @click="switchGallery(false)"
      class="modal-close is-large"
    />
    <template slot="indicators" slot-scope="props">
      <figure class="al image" :draggable="false">
        <img
          :draggable="false"
          :src="getImgUrl(props.i)"
          :title="getImgTitle(props.i)"
        />
      </figure>
    </template>
  </b-carousel>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      gallery: false
    };
  },
  methods: {
    getImgUrl(index) {
      return this.list[index].url;
    },
    getImgTitle(index) {
      return this.$t(this.list[index].title);
    },
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add("is-clipped");
      } else {
        return document.documentElement.classList.remove("is-clipped");
      }
    }
  }
};
</script>

<style>
.is-active .al img {
  border: 1px solid #fff;
  filter: grayscale(0%);
}
.al img {
  border: 1px solid transparent;
  filter: grayscale(100%);
}
</style>
