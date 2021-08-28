const user = httpVueLoader('../components/user.vue');
const login = httpVueLoader('../components/login.vue');
const home = httpVueLoader('../components/home.vue');

const routes = [
    { path: '/user', name: 'user', component: user },
    { path: '/home', name: 'home', component: home },
    { path: '/login', name: 'login', component: login }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    router,
    el: "#app",
    data: {

    },
    mounted() {
        console.log("started");
    }
});