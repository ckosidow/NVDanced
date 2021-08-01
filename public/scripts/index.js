const user = httpVueLoader('../components/user.vue');
const home = httpVueLoader('../components/home.vue');

const routes = [
    { path: '/user', name: 'user', component: user },
    { path: '/home', name: 'home', component: home }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    el: "#v-app",
    mounted() {
        console.log("Mount");
        router.push({name : 'home'});
    }
});