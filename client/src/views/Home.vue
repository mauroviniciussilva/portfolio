<template>
  <div id="home">
    <HeaderPage svg-name="Developer" />

    <SectionSvgPrimary
      title="homePage.hello"
      description="homePage.whoAmI"
      svg-name="Me"
      svg-position="right"
    />
    <SectionSvgDark
      title="homePage.responsiveness"
      description="homePage.responsivenessDescrition"
      svg-name="Mobile"
      svg-position="left"
      :is-mobile="true"
    />
    <SectionSvgPrimary
      title="homePage.fastAndSeoFriendly"
      description="homePage.fastAndSeoFriendlyDescription"
      svg-name="FastAndSEOFriendly"
      svg-position="left"
      :is-mobile="true"
    />
    <SectionSvgDark
      title="homePage.communication"
      description="homePage.communicationDescription"
      svg-name="Communication"
      svg-position="left"
      :is-mobile="true"
    />

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
import HeaderPage from "@/components/HeaderPage";
import SectionSvgPrimary from "@/components/SectionSvgPrimary";
import SectionSvgDark from "@/components/SectionSvgDark";
import ModalContact from "@/components/ModalContact";

export default {
  name: "Home",
  components: {
    HeaderPage,
    SectionSvgPrimary,
    SectionSvgDark
  },
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
