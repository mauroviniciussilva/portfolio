<template>
  <div class="full-width">
    <HeaderPage svg-name="Work" />

    <section class="section" style="max-width: 100vw;">
      <div v-for="(work, index) in works" :key="index">
        <section class="section full-width">
          <h2 class="title is-size-3-mobile is-2 has-text-white">
            {{ work.name }}
          </h2>
          <p
            class="is-size-7-mobile is-size-5 has-text-white has-text-justified"
            style="margin-bottom: 20px"
          >
            {{ $t(work.description) }}
          </p>
          <p
            v-if="work.link"
            class="has-text-left is-size-6-mobile is-size-4 has-text-primary"
            style="margin-bottom: 20px"
          >
            <b-icon icon="check-circle"> </b-icon>
            {{ $t("listWorks.publishedAt") }}
            <a :href="work.link" target="_blank" class="has-text-white">{{
              work.linkAlias
            }}</a>
          </p>
          <p
            v-else
            class="has-text-left is-size-6-mobile is-size-4 has-text-danger"
            style="margin-bottom: 20px"
          >
            <b-icon icon="minus-circle"> </b-icon>
            {{ $t("listWorks.notAvaliable") }}
          </p>
          <Carousel :list="work.list" />
        </section>
      </div>
    </section>

    <div
      class="columns is-vcentered is-centered has-background-primary is-mobile is-multiline"
      style="height: 100vh;margin: 0;padding-top: 10vh;"
    >
      <div class="column is-full-mobile is-9-tablet">
        <h2 class="title is-size-1 is-size-3-mobile has-text-dark">
          {{ $t("work.otherWorks") }}
        </h2>
        <p class="is-size-4 is-size-6-mobile has-text-white">
          {{ $t("work.otherWorksDescription") }}
        </p>
        <a
          class="button grow-hover is-large is-dark"
          name="github"
          :aria-label="$t('work.goToGitHub')"
          :title="$t('work.goToGitHub')"
          style="margin-top: 15px"
          href="https://github.com/mauroviniciussilva"
          target="_blank"
        >
          <b-icon
            icon="github"
            size="is-large"
            style="margin-right: 15px"
          ></b-icon>
          {{ $t("work.goToGitHub") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import HeaderPage from "@/components/HeaderPage";
import { works } from "@/json/works.json";

export default {
  data() {
    return {
      works: works
    };
  },
  components: {
    HeaderPage,
    Carousel
  }
};
</script>
