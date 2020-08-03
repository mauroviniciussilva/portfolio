<template>
  <div class="works">
    <HeaderPage svg-name="Skills" :hide-title-mobile="true" />

    <SectionTextPrimary
      title="skills.stack"
      description="skills.stackDescription"
    />

    <div
      class="columns is-vcentered is-centered is-mobile"
      style="height: 100vh; max-width: 100vw; padding: 2rem; margin: 0;margin-top: 10vh;"
    >
      <div class="column">
        <h2 class="title is-1 has-text-primary">{{ $t("navBar.skills") }}</h2>
        <div class="columns">
          <div class="column">
            <Skill :percentage="100" name="JavaScript" />
            <Skill :percentage="100" name="VueJS" />
            <Skill :percentage="90" name="HTML" />
            <Skill :percentage="90" name="CSS" />
            <Skill :percentage="90" name="SCSS" />
            <Skill :percentage="90" name="AngularJS" />
          </div>
          <div class="column">
            <Skill :percentage="90" name="Node" />
            <Skill :percentage="90" name="C#" />
            <Skill :percentage="85" name="MySQL" />
            <Skill :percentage="85" name="SQL" />
            <Skill :percentage="80" name="Angular" />
            <Skill :percentage="60" name="React" />
          </div>
        </div>
      </div>
    </div>

    <SectionTextPrimary
      title="skills.testingAndDocumentation"
      description="skills.testingAndDocumentationDescription"
    />

    <div
      class="columns is-vcentered is-centered is-mobile"
      style="height: 100vh; padding: 2rem; margin: 0;margin-top: 10vh;"
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
import HeaderPage from "@/components/HeaderPage";
import Skill from "@/components/Skill";
import SectionTextPrimary from "@/components/SectionTextPrimary";
import ModalContact from "@/components/ModalContact";

export default {
  name: "Skills",
  components: {
    HeaderPage,
    SectionTextPrimary,
    Skill
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
