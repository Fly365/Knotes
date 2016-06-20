# HBase

HBase是一个分布式的、面向列的开源数据库

## 安装

1. 下载 https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/
2. tar -zxcv xxx.tar.gz -C /usr/local/
3. vi conf/hbase-env.sh  修改export JAVA_HOME=/usr/local/jvm/java
4. vi conf/hbase-site.xml
	
	<configuration>
	  <property>
		<name>hbase.rootdir</name>
		<value>/home/hbase</value>
	  </property>
	</configuration>
	
5. 启动HBase  bin/start-hbase.sh
6. 用shell来连接HBase   bin/hbase shell

## shell实践

1. ./bin/hbase shell
2. create 'table1','col1'
3. list
4. put 'table1','row1','col1:a','value1'
   put 'table1','row2','col1:b','value2'
   put 'table1','row3','col1:c','value3'
5. scan 'table1'
6. get 'table1','row1'
7. disable 'table1'
8. drop 'table1'

## rest

./bin/hbase rest start & 启动hbase的rest