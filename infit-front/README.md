# Vuetify (Default)

This is the official scaffolding tool for Vuetify, designed to give you a head start in building your new Vuetify application. It sets up a base template with all the necessary configurations and standard directory structure, enabling you to begin development without the hassle of setting up the project from scratch.

## ❗️ Important Links

- 📄 [Docs](https://vuetifyjs.com/)
- 🚨 [Issues](https://issues.vuetifyjs.com/)
- 🏬 [Store](https://store.vuetifyjs.com/)
- 🎮 [Playground](https://play.vuetifyjs.com/)
- 💬 [Discord](https://community.vuetifyjs.com)

## 💿 Install

Set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |
| [bun](https://bun.sh/#getting-started)                        | `bun install`  |

After completing the installation, your environment is ready for Vuetify development.

## ✨ Features

- 🖼️ **Optimized Front-End Stack**: Leverage the latest Vue 3 and Vuetify 3 for a modern, reactive UI development experience. [Vue 3](https://v3.vuejs.org/) | [Vuetify 3](https://vuetifyjs.com/en/)
- 🗃️ **State Management**: Integrated with [Pinia](https://pinia.vuejs.org/), the intuitive, modular state management solution for Vue.
- 🚦 **Routing and Layouts**: Utilizes Vue Router for SPA navigation and vite-plugin-vue-layouts for organizing Vue file layouts. [Vue Router](https://router.vuejs.org/) | [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- ⚡ **Next-Gen Tooling**: Powered by Vite, experience fast cold starts and instant HMR (Hot Module Replacement). [Vite](https://vitejs.dev/)
- 🧩 **Automated Component Importing**: Streamline your workflow with unplugin-vue-components, automatically importing components as you use them. [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

These features are curated to provide a seamless development experience from setup to deployment, ensuring that your Vuetify application is both powerful and maintainable.

## 💡 Usage

This section covers how to start the development server and build your project for production.

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

(Repeat for npm, pnpm, and bun with respective commands.)

> Add NODE_OPTIONS='--no-warnings' to suppress the JSON import warnings that happen as part of the Vuetify import mapping. If you are on Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) or higher, you can change this to NODE_OPTIONS='--disable-warning=5401'. If you don't mind the warning, you can remove this from your package.json dev script.

### Building for Production

To build your project for production, use:

```bash
yarn build
```

(Repeat for npm, pnpm, and bun with respective commands.)

Once the build process is completed, your application will be ready for deployment in a production environment.

## 💪 Support Vuetify Development

This project is built with [Vuetify](https://vuetifyjs.com/en/), a UI Library with a comprehensive collection of Vue components. Vuetify is an MIT licensed Open Source project that has been made possible due to the generous contributions by our [sponsors and backers](https://vuetifyjs.com/introduction/sponsors-and-backers/). If you are interested in supporting this project, please consider:

- [Requesting Enterprise Support](https://support.vuetifyjs.com/)
- [Sponsoring John on Github](https://github.com/users/johnleider/sponsorship)
- [Sponsoring Kael on Github](https://github.com/users/kaelwd/sponsorship)
- [Supporting the team on Open Collective](https://opencollective.com/vuetify)
- [Becoming a sponsor on Patreon](https://www.patreon.com/vuetify)
- [Becoming a subscriber on Tidelift](https://tidelift.com/subscription/npm/vuetify)
- [Making a one-time donation with Paypal](https://paypal.me/vuetify)

## 📑 License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present Vuetify, LLC

---

## 🚀 InFit 프로젝트 개발 기록

### 🎨 UI/UX 개선 (2024-XX-XX)

사용자 경험 향상을 위해 메인 페이지(`src/pages/index.vue`)의 디자인을 다음과 같이 개선했습니다.

1.  **섹션 배경색 변경**
    -   **내용**: `Why InFit` 섹션과 `Roadmap` 섹션의 배경색을 기존의 어두운 계열에서 흰색(`bg-white`)으로 변경했습니다.
    -   **목적**: 페이지의 다른 콘텐츠와의 시각적 구분을 명확히 하고, 전체적인 디자인 통일성을 높여 가독성을 향상시켰습니다. 또한, 로드맵 카드에는 옅은 베이지색(`bg-[#FFF9F2]`)을 적용하여 부드러운 느낌을 더했습니다.

2.  **"Features" 섹션 숫자 표현 방식 개선**
    -   **내용**: 기존에 텍스트와 배경색으로 직접 스타일링했던 숫자 하이라이트를 Vuetify의 `v-icon` 컴포넌트(`mdi-numeric-*-circle`)로 교체했습니다.
    -   **목적**: Vuetify 프레임워크의 내장 아이콘을 사용하여 디자인의 일관성을 확보하고, 유지보수성을 높였습니다. 최종적으로 아이콘 색상은 흰색으로 변경하여 배경과의 조화를 맞추었습니다.

### ✨ 브랜드 아이덴티티 강화 (2024-XX-XX)

웹사이트의 정체성을 명확히 하기 위해 다음과 같은 사항을 수정했습니다.

1.  **파비콘 및 페이지 제목 수정**
    -   **내용**: `index.html` 파일에서 브라우저 탭에 표시되는 파비콘(Favicon)을 기본 아이콘에서 InFit 로고(`infit_logo.png`)로 변경하고, 페이지 제목을 "Welcome to Vuetify 3"에서 "InFit"으로 수정했습니다.
    -   **목적**: 사용자가 웹사이트를 쉽게 식별하고, 브랜드 이미지를 강화하기 위함입니다.
