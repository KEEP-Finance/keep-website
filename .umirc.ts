import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          title: 'Keey',
          component: '@/pages/Home/index',
        },
        {
          path: '/market',
          title: 'Keey',
          component: '@/pages/Market/index',
        },
      ],
    },
  ],
  fastRefresh: {},
});
