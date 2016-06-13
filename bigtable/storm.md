# Strom

开源的分布式实时计算系统 ,对比Hadoop 批处理中的佼佼者

#### 重要概念

1. Topology：计算拓扑
2. Stream:消息流
3. Spout:消息流源头
4. Bolt:消息处理单元
5. Stream grouping:消息分发策略
6. Reliability:可靠性
7. Task:任务
8. Worker:工作进程

## 安装

1. download
2. vi conf/storm.yaml  
	storm.zookeeper.servers:
    - "master"
    - "slave1"
    - "slave2"
	storm.local.dir: "/var/storm/data"
	nimbus.seeds: ["master"]
3. bin/storm nimbus 启动主控制点
4. bin/storm supervisor 启动工作节点
5. bin/storm ui 启动管理页面
	