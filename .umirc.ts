import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  fastRefresh: true,
  favicons: ['./favicon.png'],
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/tools/:tool',
      component: '@/pages/$tool.tsx',
    },
  ],
});
