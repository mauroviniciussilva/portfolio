## Introduction

Code of my personal web developer portfolio.

## Stack

I chose my favorite javascript library to develop the frontend: [VueJS](https://vuejs.org/). In addition, I also used [Buefy](https://buefy.org/), a component library based on [Bulma](https://bulma.io/), and [i18n](https://kazupon.github.io/vue-i18n/) for internationalization. The choice of the backend, [NodeJS](https://nodejs.org/en/), was due to the facility and cost of publication in a single hosting, and the agility in the development. No database was needed for this project.

## Setup

Environment variables are being used to facilitate the publication of this project on GitHub for reuse and protection of my personal data. So, to set up the environment create a `.env` file in the both in the **root** and **client** directory. Add environment-specific variables on new lines in the form of NAME=VALUE.

- `/.env`

```dosini
HOST_EMAIL=example.smtp.provider.com
USER_EMAIL=yourname@provider.com
PASS_EMAIL=password
PORT_EMAIL=000
SEND_TO=yourname@provider.com

DEFAULT_LANGUAGE=en
```

- `/client/.env`

```dosini
VUE_APP_I18N_LOCALE=en
VUE_APP_I18N_FALLBACK_LOCALE=pt
VUE_APP_I18N_SUPPORTED_LOCALE=en,pt
```

## How to run

1. Clone the repository and install the dependencies with `npm install` command in both **root** and **client** folder;
2. **Setup** the `.env` files;
3. Run the backend with `npm run dev` and the frontend with `npm run serve`;