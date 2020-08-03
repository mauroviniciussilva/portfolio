<template>
  <b-navbar class="is-fixed-top">
    <template slot="brand">
      <b-select
        icon="earth"
        style="margin-left: 10px"
        class="dark-input"
        v-model="language"
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </b-select>
    </template>
    <template slot="start">
      <router-link
        tag="a"
        :to="$i18nRoute({ name: 'Home' })"
        class="navbar-item"
        @click.native="toggleMenu()"
      >
        {{ $t("navBar.home") }}
      </router-link>
      <router-link
        tag="a"
        :to="$i18nRoute({ name: 'Skills' })"
        class="navbar-item"
        @click.native="toggleMenu()"
      >
        {{ $t("navBar.skills") }}
      </router-link>
      <router-link
        tag="a"
        :to="$i18nRoute({ name: 'Works' })"
        class="navbar-item"
        @click.native="toggleMenu()"
      >
        {{ $t("navBar.works") }}
      </router-link>
    </template>
  </b-navbar>
</template>

<script>
import { Trans } from "@/plugins/translation";

export default {
  computed: {
    supportedLocales() {
      return Trans.supportedLocales;
    },
    language: {
      get() {
        return this.$i18n.locale;
      },
      set(locale) {
        if (this.$i18n.locale !== locale) {
          const to = this.$router.resolve({ params: { locale } });
          return Trans.changeLocale(locale).then(() => {
            this.$router.push(to.location);
          });
        }
      }
    }
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",")
    };
  },
  methods: {
    toggleMenu() {
      this.$scrollToTop();
      document.querySelector(".navbar-burger").click();
    }
  }
};
</script>

<style lang="scss">
.navbar {
  background-color: #18191a;
  box-shadow: 0 8px 16px rgba(10, 10, 0, 0.5);
  overflow-x: visible !important;
}

.navbar-start {
  margin-left: auto;
}

.navbar-brand {
  align-items: center;
}

.navbar-item {
  color: #fff;
  transition: 0.3s;
  font-weight: 900;
  min-width: 100px;
  justify-content: center;
  background-color: transparent;
}

.navbar-menu.is-active {
  background-color: #18191a;
  overflow-x: hidden !important;
}

a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: #18191a;
}

.navbar-end {
  display: none;
}

.navbar-burger {
  color: #71bc78;
}

.select select {
  background-color: #18191a;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #dbdbdb;
}
</style>
