const HelloWorld = () => import ('@/components/HelloWorld.vue');

let routes = [{
    path: '/',
    name: 'Init',
    component: HelloWorld
}];

export default routes;
