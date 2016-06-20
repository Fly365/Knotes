# JBPM
Java Business Process Management(业务流程管理)
[文档](http://docs.jboss.com/jbpm/)

## 发展历程
如果说数据库系统（Database Systems)的发展历程像受人尊敬的的智者讲述条理清晰的故事，那么工作流（Workflow)的发展历程就像一个乳臭未干的小子们在大谈各自的“哲理”[^history]

[^history]: 引用《JBPM4工作流应用开发指南》



* 底层使用hiberante

## eclipse插件
	
* 安装方式 百度

## 使用设计器设计流程

* 必须有Start和End节点

## 流转控制活动

#### start 开始活动
	* start表示了一个流程在哪里开始执行。在一个流程至少得有一个start节点。一个start节点中必须有一个外流迁移(transition)并且这个转移 在流程开始时就会执行。到目前为止，**一个流程有且只有一个start节点**。

#### state 状态活动
	* state表示了一个等待状态。流程的执行将会等到有通过API提供的外力触发。state节点除了常用的节点内容（name, transition）外没有其他的属性或元素。**可以定义多个transition属性**

#### decision 判断活动
	* decision节点是一个路径多重选择。也为作为一个决定。一个decision节点有多个流程转移并且当一个流程执行到此节点时，将会自动评估来决定执行哪一个流程转移路线。

#### fork-join 分支/聚合活动
	* 当我们需要流程并发执行的时候，就需要使用fork-join活动组合，fork活动可以使流程在一条主干上出现并行的分支，join活动则可以使流程的并行分支聚合 

#### end 结束活动
	* 终结流程

#### task 人工任务活动
	* 一般用来处理涉及人机交互的活动
	* assignee 分配者属性，将任务分配给指定用户
	* 邮件提醒功能
	* 表单

#### sub-process 子流程活动
	* 当我们的流程复杂到一定程度的时候，就需要按照一定规则把业务拆分成若干个子流程，这样业务模块之间才能清晰易于划分。有时候，为了方便相对独立的流程之间的拼装、重组，划分出子流程管理也是个明智的选择。


#### 自动活动
	* java (java程序活动)
	* script (脚本活动,EL表达式)
	* hql (Hibernate查询语言活动)
	* sql (结构化查询语言活动)
	* mail (邮件活动)

## 测试

* ProcessDefinition 流程模板
* ProcessInstance 流程实例
* Token 流程顺序



#### code

	public static void main(String[] args){
		ProcessDefinition processDefinition = 
			ProcessDefinition.parseXmlResource("helloworld/processdefinition.xml"); //流程模板
		ProcessInstance processInstance = new ProcessInstance(processDefinition); // 流程实例
		Token token = processInstance.getRootToken(); //流程
		System.out.println("1 当前流程所处的节点名称：" + token.getNode().getName()); 
		token.signal(); //流程向下异步

		System.out.println("2 当前流程所处的节点名称：" + token.getNode().getName());
		token.signal();
		//....

		System.out.println("当前流程状态："+token.getProcessInstance().hasEnded());
	}

## 配置

* JbpmConfiguration 配置文件对象
* JbpmConfiguration 单列对象，通过getInstance()实例化
* JbpmConfiguration 最大作用就是创建一个jbpmContext对象，jbpm上下文，数据库操作
* JbpmConfiguration 是线程安全的

## JbpmConfiguration
 
* createJbpmContext()
* getCurrentJbpmContext()
* createSchema() 建表
* dropSechema() 删除表
* getJobExecutor() 得到任务调度服务对象
* startJobExcutor() 开始系统的任务调度服务



## 遇到的问题

1. 数据库导入问题 type=InnoDB; 改为 engine=InnoDB;

2. org.hibernate.exception.ConstraintViolationException: could not delete,连接Mysql5时，jBPM4运行到 End结点时的错误，把 hibernate.dialect 改为 `org.hibernate.dialect.MySQLInnoDBDialect`
3. 乱码：在eclipse快捷方式->目标和启动文件eclipse.ini的后面加入 `-Dfile.encoding=UTF-8`

4. jbpm.hibernate.cfg.xml配置文件中
	`<property name="hibernate.connection.url">jdbc:mysql://127.0.0.1:3306/XXdb?useUnicode=true&amp;characterEncoding=UTF-8</property>`

5. No unnamed transitions were found for the task 'A'  原因： `taskService.completeTask(taskId,result,map);` //result就是对应transitions的name 


## 表结构

**Jbpm4 共有18张表**
	
一：资源库与运行时表结构

1. JBPM4_DEPLOYMENT 流程定义表
2. JBPM4_DEPLOYPROP 流程定义属性表
3. JBPM4_EXECUTION  流程实例表
4. JBPM4_PROPERTY  流程引擎表
 
5. JBPM4_TASK 任务表
6. JBPM4_VARIABLE 上下文表
7. JBPM4_JOB  定时表
8. JBPM4_LOB  存储表
9. JBPM4_SWIMLANE泳道表
10. JBPM4_PARTICIPATION 参与者表
 
二： 历史数据表

11. JBPM4_HIST_ACTINST 流程活动(节点)实例表
12. JBPM4_HIST_DETAIL  流程历史详细表 
13. JBPM4_HIST_PROCINST 流程实例历史表
14. JBPM4_HIST_TASK  流程任务实例历史表
15. JBPM4_HIST_VAR 流程变量（上下文）历史表
 
三：身份认证表结构

16. JBPM4_ID_GROUP 组表
17. JBPM4_ID_MEMBERSHIP 用户角色表
18. JBPM4_ID_USER  用户表

## 操作信息变化

	发布一个流程deploy后
	Ø jbpm4_deployment(流程定义)：新增一条记录
	Ø jbpm4_lob(存储表)： 新增一条记录
	Ø jbpm4_deployprop(流程定义属性表)：新增四条记录 
	 
	上传一个zip包（包含png和jpdl.xml）后
	Ø JBPM4_DEPLOYMENT多一条记录
	Ø JBPM4_DEPLOYPROP 多三条
	Ø JBPM4_LOB多两条。
	 
	 
	开始一个流程startProcessInstanceByKey后
	Ø jbpm4_execution(流程实例表)：新增一条记录
	Ø jbpm4_hist_procinst(流程实例历史表)：新增一条记录
	Ø jbpm4_variable (上下表)：新增一条记录
	Ø jbpm4_task (任务表)：新增一条记录
	Ø jbpm4_hist_task(任务历史表)：新增一条记录
	Ø jbpm4_hist_actinst (活动节点实例表)：新增一条记录
	 
	 
	 
	填写申请信息
	Ø jbpm4_variable(上下表) ： 新增N条记录,根据表单信息决定
	Ø jbpm4_task (任务表)：新增一条记录
	Ø jbpm4_hist_task(任务历史表)：新增一条记录
	Ø jbpm4_hist_actinst (活动节点实例表)：新增一条记录
	 
	审批申请信息
	1.同意：
	Ø jbpm4_hist_actinst (活动节点实例表)：新增一条记录
	2.驳回：
	Ø jbpm4_task (任务表)：新增一条记录
	Ø jbpm4_hist_task(任务历史表)：新增一条记录
	Ø jbpm4_hist_actinst (活动节点实例表)：新增一条记录
	审批结束
	Ø jbpm4_hist_actinst (活动节点实例表)：新增一条记录

## 基本类

1. 流程引擎 ProcessEngine processEngine = Configuration.getProcessEngine();
2. 流程定义管理RepositoryService repositoryService = processEngine.getRepositoryService();
3. 执行管理ExecutionService executionService = processEngine.getExecutionService();
4. 任务管理TaskService taskService = processEngine.getTaskService();
5. 历史管理HistoryService historyService = processEngine.getHistoryService();
6. 用户管理IdentityService identityService= processEngine.getIdentityService();


## ProcessDefinition/ProcessInstance/Execution/Task关系和区别

[区别](http://zybing.iteye.com/blog/746088)