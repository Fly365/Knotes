# Redis
Redis是一个key-value存储系统。和Memcached类似，它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hash(哈希类型)。这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。在此基础上，redis支持各种不同方式的排序。与memcached一样，为了保证效率，数据都是缓存在内存中。区别的是redis会周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件，并且在此基础上实现了master-slave。


## 启动命令
`redis-server xxx.conf`

## 安装

1. [官网下载](http://redis.io/),windows版本[下载](https://github.com/MSOpenTech/redis/releases)
2. 启动redis `redis-server.exe redis.windows.conf` ，可以将命令保存为startup.bat文件，方便下次启动

>		D:\Develop\redis-2.8.12>redis-server.exe redis.windows.conf  
		[7736] 10 Aug 21:39:42.974 #  
		The Windows version of Redis allocates a large memory mapped file for sharing  
		the heap with the forked process used in persistence operations. This file  
		will be created in the current working directory or the directory specified by  
		the 'dir' directive in the .conf file. Windows is reporting that there is  
		insufficient disk space available for this file (Windows error 0x70).  
		You may fix this problem by either reducing the size of the Redis heap with  
		the --maxheap flag, or by starting redis from a working directory with  
		sufficient space available for the Redis heap.  
		Please see the documentation included with the binary distributions for more  
		details on the --maxheap flag.  
		Redis can not continue. Exiting

解决问题方式：打开配置文件 redis.windows.conf ,搜索 maxheap
>		.......  
	    #    
	    # maxheap <bytes>  
	    maxheap 1024000000  
	    .......  


4. 测试 
	* `redis-cli.exe -h 127.0.0.1 -p 6379`
	* `set name kenfo`
	* `get name`

5. windows下小工具脚本 
`net start redis` *启动服务*

* service-install.bat

>	redis-server.exe --service-install redis.windows.conf --loglevel verbose
	redis-server --service-start

* uninstall-service.bat

>	redis-server --service-stop
	redis-server --service-uninstall

* startup.bat

>	redis-server.exe redis.windows.conf


## 修改配置文件

修改配置文件`redis.windows.conf`,如果有中文,请另存为`UTF-8`编码.

	# 修改端口号
	# port 6379
	port 80

	# 指定访问密码
	# requirepass foobared
	requirepass 6EhSiGpsmSMRyZieglUImkTr-eoNRNBgRk397mVyu66MHYuZDsepCeZ8A-MHdLBQwQQVQiHBufZbPa

	# 设置最大堆内存限制,两者设置一个即可
	# maxheap <bytes>
	maxheap 512000000

	# 设置最大内存限制, 两者设置一个即可
	# maxmemory <bytes>
	# maxmemory 512000000

此时,如果用客户端来访问,使用如下cmd命令,可以保存为 `client.bat` 文件:

	redis-cli.exe -h redis.duapp.com -p 80 -a 6EhSiGpsmSMRyZieglUImkTr-eoNRNBgRk397mVyu66MHYuZDsepCeZ8A-MHdLBQwQQVQiHBufZbPa

## 其他

管理工具: RedisStudio: [https://github.com/cinience/RedisStudio](https://github.com/cinience/RedisStudio)

java 开发包jedis
