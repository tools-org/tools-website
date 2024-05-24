import { defineConfig } from 'umi';
import path from 'path';
// import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  chainWebpack(memo) {
    // memo.plugin('MonacoWebpackPlugin').use(MonacoWebpackPlugin);
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        {
          path: '/tools/:tool',
          component: '@/pages/$tool.tsx',
        },
      ],
    },
  ],
});
