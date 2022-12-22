# sub-converter

## Get Started

```sh
git clone https://github.com/CQBerry/sub_converter.git
cd sub_converter
pnpm i
pnpm dev
```

## What's this?

In fact, most of the code comes from the [sub-web](https://github.com/CareyWang/sub-web), I have refactored it using [Vue 3](https://vuejs.org/), [Pinia](https://pinia.vuejs.org/) and [Vuetify](https://next.vuetifyjs.com/en/).

## Configurations

Please look at `example.subconverter.config.ts` in the root directory and rename it to `subconverter.config.ts`

### Items

- `defaultBackendUrl`: The default url used when the **Backend Url** is not filled in (required)