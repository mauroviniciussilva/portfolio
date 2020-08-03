<template>
  <section>
    <div class="modal-card" style="width: auto">
      <section class="modal-card-body has-background-dark">
        <b-field :label="$t('contact.name')">
          <b-input
            custom-class="dark-input"
            name="name"
            v-model="form.name"
            type="text"
            :placeholder="$t('contact.namePlaceHolder')"
            required
            :disabled="isLoading"
          ></b-input>
        </b-field>
        <b-field :label="$t('contact.email')">
          <b-input
            name="email"
            custom-class="dark-input"
            v-model="form.email"
            type="email"
            :placeholder="$t('contact.emailPlaceHolder')"
            required
            :disabled="isLoading"
          ></b-input>
        </b-field>
        <b-field :label="$t('contact.phone')">
          <vue-phone-number-input
            name="phone"
            v-model="form.phone"
            :translations="translations"
            color="#2f2f30"
            @update="onUpdatePhone"
            dark
            valid-color="#71bc78"
            dark-color="#18191a"
            :no-example="true"
            :disabled="isLoading"
          />
        </b-field>
        <b-field :label="$t('contact.subject')">
          <b-input
            name="subject"
            custom-class="dark-input"
            v-model="form.subject"
            type="text"
            :placeholder="$t('contact.subjectPlaceHolder')"
            :disabled="isLoading"
          ></b-input>
        </b-field>
        <b-field :label="$t('contact.message')">
          <b-input
            name="message"
            custom-class="dark-input"
            v-model="form.message"
            type="textarea"
            :placeholder="$t('contact.messagePlaceHolder')"
            required
            :disabled="isLoading"
          ></b-input>
        </b-field>
        <b-button
          expanded
          type="is-primary"
          name="send"
          :aria-label="$t('contact.send')"
          @click="sendEmail()"
          :loading="isLoading"
        >
          {{ $t("contact.send") }}
        </b-button>
      </section>
    </div>
  </section>
</template>

<script>
import contactService from "@/services/contactService";

export default {
  data() {
    return {
      phoneIsValid: false,
      isLoading: false,
      form: {},
      translations: {
        countrySelectorLabel: this.$t("contact.countryCode"),
        countrySelectorError: this.$t("contact.chooseACountry"),
        phoneNumberLabel: this.$t("contact.phoneNumber"),
        example: `${this.$t("contact.example")} :`
      }
    };
  },
  methods: {
    onUpdatePhone(e) {
      this.phoneIsValid = e.isValid;
    },
    sendEmail() {
      let isValid = true;
      if (!this.form.name) isValid = false;
      if (!this.form.email) isValid = false;
      if (!this.form.subject) isValid = false;
      if (!this.form.message) isValid = false;
      if (!this.form.phone || !this.phoneIsValid) isValid = false;

      if (!isValid) {
        this.$buefy.snackbar.open({
          duration: 3000,
          message: this.$t("contact.invalidMessage"),
          type: "is-danger",
          position: "is-bottom-right",
          actionText: "Ok",
          queue: false
        });
      }

      this.isLoading = true;
      contactService
        .post(this.form)
        .then(response => {
          this.$parent.close();
          this.$buefy.snackbar.open({
            duration: 3000,
            message: response.data.message || "Message sent successfully!",
            type: "is-success",
            position: "is-bottom-right",
            actionText: "Ok",
            queue: false
          });
        })
        .catch(e => {
          this.$buefy.snackbar.open({
            duration: 3000,
            message: e.data.message || "I'm sorry, your message couldn't be sent. Try again in a few moments.",
            type: "is-danger",
            position: "is-bottom-right",
            actionText: "Ok",
            queue: false
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style lang="scss">
.modal-card-body,
.modal-card,
.modal-content {
  label {
    color: #fff;
  }
}
</style>
