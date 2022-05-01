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
          title: 'Keep Finance',
          component: '@/pages/Home/index',
        },
        {
          path: '/market',
          title: 'Keep Finance',
          component: '@/pages/Market/index',
        },
      ],
    },
  ],
  fastRefresh: {},
});
