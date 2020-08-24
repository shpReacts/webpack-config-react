# mimimal webpack config for react

## development

`npm start` 스크립트로 webpack-dev-server를 실행합니다.
start 스크립트는 webpack.dev.js 파일을 webpack 설정으로 사용합니다.

빠른 개발 경험을 위해 css를 extract하지 않고, js,css,html output을 minify하지 않습니다.

state 유지를 위해 hmr을 사용합니다.

## build

`npm run build` 스크립트로 build합니다.
build 스크립트는 webpack.prod.js 파일을 webpack 설정으로 사용합니다.

css를 extract하고, js,css,html output을 minify합니다.

cache busting을 위해 js, css에 `[contenthash]` placeholder를 사용하여 output 파일명을 짓습니다.
