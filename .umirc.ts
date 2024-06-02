import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  fastRefresh: true,
  // chainWebpack(memo) {
  //   // memo.plugin('MonacoWebpackPlugin').use(MonacoWebpackPlugin);
  // },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/tools/:tool',
      component: '@/pages/$tool.tsx',
    },
  ],
});
