import { createApp, provide, reactive } from 'vue'
import './style.css'
import App from './App.vue'
// import { plugin } from './puugins/index.js'

const app = createApp(App);

// const config = reactive({});

// const getFetchEnv = async () => {
//     // const envUrl = `env-${import.meta.env.MODE}`;
//     const fetchFile = await fetch(`/config/index.json`);
//     const fetchENV = await fetchFile.json();
//     console.log('fetchENV_fetchENV', fetchENV);
//     return fetchENV;
// };

// async function setupGlobalConfig() {
//     try {
//         // 等待异步配置加载
//         const fetchedConfig = await getFetchEnv();
//         // 更新响应式配置对象
//         Object.assign(config, fetchedConfig);
//     } catch (error) {
//         console.error('Failed to load config:', error);
//     }
// }

// setupGlobalConfig()

// provide('config', config);


// app.use(plugin);

app.mount('#app')
