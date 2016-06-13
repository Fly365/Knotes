# MetaQ

  MetaQ（全称Metamorphosis）是一个高性能、高可用、可扩展的分布式消息中间件，思路起源于LinkedIn的Kafka，但并不是Kafka的一个Copy。MetaQ具有消息存储顺序写、吞吐量大和支持本地和XA事务等特性，适用于大吞吐量、顺序消息、广播和日志数据传输等场景，目前在淘宝和支付宝有着广泛的应用。
  
  
## 安装

1. 下载metaq:
	http://fnil.net/downloads/index.html

2. 安装
	[root@localhost software]# pwd
	/export/software
	[root@localhost software]# tar -zxvf metaq-server-1.4.6.2.tar.gz
	[root@localhost software]# cd taobao
	[root@localhost taobao]# ls
	COPYING.txt  metamorphosis-server-wrapper  README.md
	[root@localhost taobao]# mv metamorphosis-server-wrapper metaq1.4.6.2
	[root@localhost taobao]# cp metaq1.4.6.2 /usr/local -r
	[root@localhost taobao]# cd /usr/local/metaq1.4.6.2/

3. 配置metaq
	
	[root@localhost metaq1.4.6.2]# zkServer.sh status
	JMX enabled by default
	Using config: /usr/local/zookeeper-3.4.6/bin/../conf/zoo.cfg
	Mode: standalone
	[root@localhost metaq1.4.6.2]# netstat -ntlp | grep 2181
	tcp        0      0 :::2181                     :::*                        LISTEN      2542/java
	[root@localhost metaq1.4.6.2]# pwd
	/usr/local/metaq1.4.6.2
	[root@localhost metaq1.4.6.2]# vim conf/server.ini
	#配置metaq数据路径
	;数据文件路径，默认在user.home/meta下
	dataPath=/usr/local/metaq1.4.6.2/data
	;日志数据文件路径，默认跟dataPath一样
	dataLogPath=/usr/local/metaq1.4.6.2/data/logs
	# 确保metaq zookeeper服务相关,依赖的zookeeper的地址是有效的,默认配置如下.同笔者的一样.所以无需修改
	[zookeeper]
	;zookeeper服务器列表
	zk.zkConnect=localhost:2181
	;zookeeper心跳超时,单位毫秒,默认30秒
	zk.zkSessionTimeoutMs=30000
	;zookeeper连接超时时间,单位毫秒,默认30秒
	zk.zkConnectionTimeoutMs=30000
	;zookeeper数据同步时间,单位毫秒,默认5秒
	zk.zkSyncTimeMs=5000
	
4. 启动Metaq
	[root@localhost bin]# pwd
	/usr/local/metaq1.4.6.2/bin
	[root@localhost bin]# ./metaServer.sh start
	
5. 访问web管理平台
   Web管理平台HTTP端口号为8120. 访问该端口查看管理平台
   http://10.10.11.191:8120/
   