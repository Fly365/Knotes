[TOC]
# hadoop 安装与配置

#### ubuntu下安装hadoop
1.安装jdk
`apt-get install java-6-openjdk`
2.设置环境变量
>		vim /etc/profile
		export JAVA_HOME=/usr/lib/jvm/java-6-openjdk/ 
		export JRE_HOME=$JAVA_HOME/jre 
		export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH 
		export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH 
			
3.下载hadoop
>		wget http://mirror.bit.edu.cn/apache/hadoop/common/hadoop-1.2.1/hadoop-1.2.1.tar.gz</code>
		mv hadoop-1.2.1.tar.gz /opt/</code>
		cd /opt/</code>
		tar -zxvf hadoop-1.2.1.tar.gz </code>
		cd /hadoop-1.2.1/conf/ 

#### 配置hadoop
*配置config中的 mapred.site.xml core.site.xml hdfs.site.xml hadoop-env.sh*

1.hadoop-env.sh
`vim hadoop-env.sh`
>		export JAVA_HOME = /usr/lib/jvm/java-6-openjdk/

2.core-site.xml
`vim core-site.xml`
>		<property>
			<name>hadoop.tmp.dir</name>
			<value>/hadoop</value>
		</property>
		<property>
			<name>dfs.name.dir</name>
			<value>/hadoop/name</value>
		</property>
		<property>
			<name>fs.default.name</name>
			<value>hdfs://192.168.0.200:9000</value>
		</property>

3.hdfs-site.xml
`vim hdfs-site.xml`
>		<property>
			<name>dfs.data.dir</name>
			<value>/hadoop/data</value>
		</property>

4.mapred-site.xml
`vim mapred-site.xml`
>		<property>
			<name>mapred.job.tracker</name>
			<value>hdfs://localhost:9001</value>
		</property>

5.更改环境变量
`vim /ect/profile`	
>		export HADOOP_HOME=/opt/hadoop-1.2.1/
		PATH=HADOOP_HOME/bin:$PATH

6.是环境变量生效
`source /etc/profile`

7.启动hadoop
`hadoop namenode -format` 执行hadoop前对namenode进行格式化
`jps` 查看hadoop是否正常运行


#### 常见问题

1.当配置环境变量文件失败导致大部分命令失效时
`export PATH=/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin`