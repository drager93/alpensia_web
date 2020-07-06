import serveStatic from "serve-static";

export default {
  env: {},
  head: {
    title: "알펜시아 리조트",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js TypeScript project",
      },
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700,800&display=swap&subset=korean",
      },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js",
      },
    ],
  },
  loading: { color: "#3B8070" },
  css: ["ant-design-vue/dist/antd.css", "~/assets/styles/index.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  plugins: ["~/plugins/antd", { src: "~/plugins/gmaps", ssr: false }],
  //modules: ["@nuxtjs/axios"],
  axios: {},
  serverMiddleware: [{ path: "/documents", handler: serveStatic(__dirname + "/documents") }],
};
