# Docker
  Docker是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化
  
 

## 安装

安装教程:https://docs.docker.com/engine/installation/linux/ubuntulinux/
**ubuntu 16.04 64位，默认安装**

1.添加GPG key：

	$sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

2.添加源

	新建文件：/etc/apt/sources.list.d/docker.list，在里面添加内容：  
	deb https://apt.dockerproject.org/repo ubuntu-xenial main

3.更新源

	$ sudo apt-get update

4.安装与测试

	$ sudo apt-get install docker-engine
	$ sudo service docker start 
	$ sudo docker run hello-world

5. 配置开机启动

	$ sudo systemctl enable docker

	
## 命令

#### Docker服务相关命令

	#service docker start    //启动
	#service docker restart  //重启
	#service docker stop    //停止
	Docker服务对应的版本查看
	# sudo docker version
	Docker环境查看
	#sudo docker info
	
#### Docker命令帮助

	#sudo docker  //查看docker的所有命令
	#sudo docker command --help  //查看单个docker命令的帮助，如docker ru--help
	
#### Docker容器相关命令

