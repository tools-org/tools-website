# tools-website

工具站点项目，基于 nextjs 开发，实现的一体化 ssr 应用

## 本地开发

```bash
yarn install
yarn dev
```

## docker 镜像

```bash
# 构建镜像
docker build -t tools-website:v1 .
# 到处镜像到压缩文件
docker save -o tools-website.tar tools-website
# 创建容器
docker run -it --name tools-website  tools-website:v1
```
