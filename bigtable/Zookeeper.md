# Zookeeper

ZooKeeper是一个分布式的，开放源码的分布式应用程序协调服务，是Google的Chubby一个开源的实现，是Hadoop和Hbase的重要组件

## 安装

1. download
2. cp conf/zoo_sample.cfg conf/zoo.cfg
3. 修改zoo.cfg中的dataDir=/var/zookeeper
4. bin/zkServer.sh start  启动服务
5. bin/zkCli.sh -server 127.0.0.1:2181 测试连接
