<template>
  <div id="home">
    <div class="header-page fade-in">
      <div
        v-html="require('!html-loader!./../assets/Developer.svg')"
        class="grow-hover"
      ></div>
      <div style="position: absolute;" class="full-width full-height">
        <h1 class="title-overlay">Mauro Oliveira</h1>
      </div>
    </div>

    <div class="full-width" style="height:100vh; display:block">
      <div
        class="columns is-vcentered is-centered is-mobile has-background-primary"
        style="height: 110vh;max-width: 100vw;margin: 0;margin-top: 5vh"
      >
        <div class="column is-5">
          <h2 class="title is-size-1 is-size-3-mobile has-text-dark">
            {{ $t("homePage.hello") }}
          </h2>
          <p class="is-size-4 is-size-6-mobile has-text-white">
            {{ $t("homePage.whoAmI") }}
          </p>
        </div>
        <div class="column is-5">
          <div
            v-html="require('!html-loader!./../assets/Me.svg')"
            class="grow-hover"
          ></div>
        </div>
      </div>
    </div>

    <div
      class="columns is-vcentered is-centered"
      style="height: 100vh; max-width: 100vw; padding: 2rem; margin: 0;margin-top: 20vh;"
    >
      <div class="column is-5">
        <div
          v-html="require('!html-loader!./../assets/Mobile.svg')"
          class="grow-hover"
        ></div>
      </div>
      <div class="column is-5">
        <h2 class="title is-size-1 is-size-3-mobile has-text-primary">
          {{ $t("homePage.responsiveness") }}
        </h2>
        <p class="is-size-4 is-size-6-mobile has-text-white">
          {{ $t("homePage.responsivenessDescrition") }}
        </p>
      </div>
    </div>

    <div
      class="columns is-vcentered is-centered has-background-primary is-mobile is-multiline"
      style="height: 110vh; max-width: 100vw; padding: 2rem; margin: 0"
    >
      <div class="column is-full-mobile is-5-tablet">
        <div
          v-html="require('!html-loader!./../assets/FastAndSEOFriendly.svg')"
          class="grow-hover"
        ></div>
      </div>
      <div class="column is-full-mobile is-5-tablet">
        <h2 class="title is-size-1 is-size-3-mobile has-text-dark">
          {{ $t("homePage.fastAndSeoFriendly") }}
        </h2>
        <p class="is-size-4 is-size-6-mobile has-text-white">
          {{ $t("homePage.fastAndSeoFriendlyDescription") }}
        </p>
      </div>
    </div>

    <div
      class="columns is-vcentered is-centered"
      style="height: 100vh; max-width: 100vw; padding: 2rem; margin: 0;margin-top: 20vh;"
    >
      <div class="column is-5">
        <div
          v-html="require('!html-loader!./../assets/Communication.svg')"
          class="grow-hover"
        ></div>
      </div>
      <div class="column is-5">
        <h2 class="title is-size-1 is-size-3-mobile has-text-primary">
          {{ $t("homePage.communication") }}
        </h2>
        <p class="is-size-4 is-size-6-mobile has-text-white">
          {{ $t("homePage.communicationDescription") }}
        </p>
      </div>
    </div>

    <div
      class="columns is-vcentered is-centered is-multiline is-mobile has-background-primary"
      style="height: 100vh;margin: 0"
    >
      <div class="column is-full">
        <div class="columns is-multiline">
          <div class="column is-full">
            <a
              class="button is-large is-primary grow-hover"
              href="https://github.com/mauroviniciussilva"
              target="_blank"
              name="GitHub"
              aria-label="GitHub"
              title="GitHub"
              style="margin: 10px"
            >
              <b-icon icon="github" size="is-large"></b-icon>
            </a>

            <a
              class="button is-large is-primary grow-hover"
              href="https://www.linkedin.com/in/mauroviniciussilva"
              target="_blank"
              name="LinkedIn"
              aria-label="LinkedIn"
              title="LinkedIn"
              style="margin: 10px"
            >
              <b-icon icon="linkedin" size="is-large"></b-icon>
            </a>

            <a
              class="button is-large is-primary grow-hover"
              href="http://api.whatsapp.com/send?phone=5511993951098"
              target="_blank"
              name="WhatsApp"
              aria-label="WhatsApp"
              title="WhatsApp"
              style="margin: 10px;"
            >
              <b-icon icon="whatsapp" size="is-large"></b-icon>
            </a>
          </div>
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
          <div class="column is-full">
            <router-link
              tag="button"
              :to="$i18nRoute({ name: 'Works' })"
              class="button is-large is-dark grow-hover"
              name="works"
              :aria-label="$t('navBar.works')"
              :title="$t('navBar.works')"
              @click.native="$scrollToTop()"
            >
              {{ $t("navBar.works") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalContact from "@/components/ModalContact";

export default {
  name: "Home",
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
