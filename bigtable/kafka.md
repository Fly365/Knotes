# Kafka 

 Kafka是一个分布式的、可分区的、可复制的消息系统。它提供了普通消息系统的功能，但具有自己独特的设计。
 
## 安装

1. 下载kafka的二进制包 解压到/usr/local下面
2. 启动zookeeper 
	bin/zookeeper-server-start.sh config/zookeeper.properties &
3. 启动kafka服务
	bin/kafka-server-start.sh config/server.properties &
5. 测试是否成功
	1. 运行producer
		bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
	2. 在另一个终端中运行consumer
		bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic test --from-beginning 
	3. 在producer中输入字符，在consumer中可以显示出来
	

## 相关问题

 INFO Got user-level KeeperException when processing sessionid:0x154e7a6aaa60002 type:create cxid:0x1 zxid:0x2c txntype:-1 reqpath:n/a Error Path:/consumers Error:KeeperErrorCode = NodeExists for /consumers (org.apache.zookeeper.server.PrepRequestProcessor)
[2016-05-25 19:24:25,603] INFO Got user-level KeeperException when processing sessionid:0x154e7a6aaa60002 type:create cxid:0x2 zxid:0x2d txntype:-1 reqpath:n/a Error Path:/consumers/group Error:KeeperErrorCode = NodeExists for /consumers/group (org.apache.zookeeper.server.PrepRequestProcessor)

解决办法：配置hosts文件 做zookeeper服务器的映射配置
host.name = 10.10.11.191
advertised.host.name = 10.10.11.191



## flume-ng+Kafka+Storm+HDFS 实时系统组合
