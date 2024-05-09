import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/client/qrcode/signature',
    redirect: to => {
      const newDomain = 'https://fabricainfo.eidentidade.com.br';
      const pathWithoutDomain = to.fullPath.replace(/^https?:\/\/[^/]+/, '');
      const newUrl = newDomain + pathWithoutDomain
      window.location.href = newUrl
      return '';
    },
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active-item-sidebar',
  scrollBehavior(to) {
    if (to.hash !== '#planos') {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
