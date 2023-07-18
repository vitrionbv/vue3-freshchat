console.time("full-boot-time");
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
console.timeLog("full-boot-time", "lost time before vue was created");
console.time("render-time");
createApp(App).mount('#app')
const consoleEnvStyle =
    "padding:10px;background:#164732;color:#FFF;font-weight:bold;font-size:14px;";
console.group("%cBoot finished", consoleEnvStyle);
console.timeEnd("full-boot-time");
console.timeEnd("render-time");
console.groupEnd();
// Ignore eslint because its an global defined const in vite.config.js
// eslint-disable-next-line no-undef
console.group("%cDebug", consoleEnvStyle);
console.groupEnd();
