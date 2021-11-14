import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import user from './routes/user.vue'
import home from './routes/home.vue'
import album from './routes/album.vue'
import other from './routes/other.vue'
import playlist from './routes/playlist.vue'
import '../public/styles/sass/site.sass'

const routes = [
    { path: '/user', name: 'user', component: user },
    { path: '/home', name: 'home', component: home },
    { path: '/', name: 'home', component: home },
    { path: '/album', name: 'album', component: album, props: true },
    { path: '/other', name: 'other', component: other, props: true },
    { path: '/playlist', name: 'playlist', component: playlist, props: true }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes // short for `routes: routes`
});

createApp(App).use(router).mount('#app');