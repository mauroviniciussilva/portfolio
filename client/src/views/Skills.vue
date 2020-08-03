<template>
  <div class="works">
    <div class="header-page fade-in">
      <div
        v-html="require('!html-loader!./../assets/Skills.svg')"
        class="grow-hover"
        style="z-index:2"
      ></div>
      <div style="position: absolute;" class="full-width full-height">
        <h1 class="title-overlay">Mauro Oliveira</h1>
      </div>
    </div>

    <div
      class="columns is-vcentered is-centered has-background-primary is-mobile"
      style="height: 110vh; max-width: 100vw; padding: 2rem; margin: 0;margin-top: 10vh;padding-top: 10vh;padding-bottom: 10vh"
    >
      <div class="column is-full-mobile is-9-tablet">
        <h2 class="title is-1 has-text-dark">{{ $t("skills.stack") }}</h2>
        <p class="is-size-4 is-size-5-mobile has-text-white">
          {{ $t("skills.stackDescription") }}
        </p>
      </div>
    </div>

    <div
      class="columns is-vcentered is-centered is-mobile"
      style="height: 100vh; max-width: 100vw; padding: 2rem; margin: 0;margin-top: 10vh;"
    >
      <div class="column">
        <h2 class="title is-1 has-text-primary">{{ $t("navBar.skills") }}</h2>
        <div class="columns">
          <div class="column">
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="100"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">JavaScript</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="100"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">VueJS</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="98"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">HTML</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="97"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">CSS</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="97"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">SCSS</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="95"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">AngularJS</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="93"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">Node</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="93"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">C#</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="85"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">MySQL</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="85"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">SQL</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="83"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">Angular</p>
              </div>
            </div>
            <div class="columns is-vcentered is-centered is-mobile">
              <div class="column is-8">
                <b-progress type="is-primary" :value="75"></b-progress>
              </div>
              <div class="column is-4-mobile is-2-tablet has-text-left">
                <p class="is-size-5 has-text-white">React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="columns is-vcentered is-centered has-background-primary is-mobile is-multiline"
      style="height: 110vh; max-width: 100vw; padding: 2rem; margin: 0;margin-top: 20vh;padding-top: 10vh;padding-bottom: 10vh"
    >
      <div class="column is-full-mobile is-9-tablet">
        <h2 class="title is-size-1 is-size-2-mobile has-text-dark">
          {{ $t("skills.testingAndDocumentation") }}
        </h2>
        <p class="is-size-4 is-size-5-mobile has-text-white">
          {{ $t("skills.testingAndDocumentationDescription") }}
        </p>
      </div>
    </div>

    <div
      class="columns is-vcentered is-centered is-mobile"
      style="height: 100vh; max-width: 100vw; padding: 2rem; margin: 0;margin-top: 10vh;"
    >
      <div class="column">
        <h2 class="title is-1 has-text-primary">
          {{ $t("skills.questions") }}?
        </h2>

        <div class="column is-full">
          <b-button
            size="is-large"
            type="is-dark"
            name="contact-me"
            :aria-label="$t('contact.contactMe')"
            :title="$t('contact.contactMe')"
            class="grow-hover"
            @click="sendEmail()"
          >
            {{ $t("contact.contactMe") }}
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalContact from "@/components/ModalContact";

export default {
  methods: {
    sendEmail() {
      this.$buefy.modal.open({
        parent: this,
        component: ModalContact,
        hasModalCard: false,
        trapFocus: false,
        width: 500
      });
    }
  }
};
</script>
