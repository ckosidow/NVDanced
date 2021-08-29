const user = httpVueLoader('../components/user.vue');
const login = httpVueLoader('../components/login.vue');
const home = httpVueLoader('../components/home.vue');
const other = httpVueLoader('../components/other.vue');

const routes = [
    { path: '/user', name: 'user', component: user },
    { path: '/home', name: 'home', component: home },
    { path: '/login', name: 'login', component: login },
    { path: '/other', name: 'other', component: other, props: true}
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    router,
    el: "#app",
    data: {
        auth: null
    },
    methods: {
        logOut() {
            $cookies.remove('auth');

            this.auth = null;
        }
    },
    mounted() {
        this.auth = $cookies.get('auth');
    }
});