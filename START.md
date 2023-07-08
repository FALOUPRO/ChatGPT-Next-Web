启动命令
修改.env.local中的配置并保存
killall node
yarn build
nohup yarn start > log.txt>&1 &
exit