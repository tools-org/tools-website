# 拷贝build 资源到镜像，并启动
FROM --platform=linux/amd64 node:20

# 创建工作目录
WORKDIR /usr/src/app

# 复制public  、package.json到镜像并安装
COPY package.json yarn.lock*  ./
RUN yarn install --frozen-lockfile

# 复制其他文件到镜像
COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .
COPY index.d.ts .

# 构建
RUN yarn build

# 启动
EXPOSE 3000
CMD [ "yarn", "start" ]
