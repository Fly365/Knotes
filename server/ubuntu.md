
教程 http://www.cnblogs.com/laov/p/3421479.html

1. 下载VM和ubuntu server
2. 安装虚拟机
3. 开启ssh服务
	sudo apt-get install openssh-server
	
	检查ssh服务开启状态
	ps -s | grep ssh
	
	命令启动ssh服务
	service ssh start
	/etc/init.d/ssh start
	
	主机名分别为：master，host2，host3，host4。
    sudo vim /etc/hostname
	
	修改/etc/hosts文件。
    修改每台电脑的hosts文件
    在每台linux上，sudo vim /etc/hosts 编写hosts文件
	
	
## ssh无密码登录

无密码登陆，效果也就是在master上，通过 ssh host2 或 ssh host3 或 ssh host4 就可以登陆到对方计算机上。而且不用输入密码。

    四台虚拟机上，使用   ssh-keygen -t rsa    一路按回车就行了。

    刚才都作甚了呢？主要是设置ssh的密钥和密钥的存放路径。 路径为~/.ssh下。

    打开~/.ssh 下面有三个文件

    authorized_keys，已认证的keys

    id_rsa，私钥

    id_rsa.pub，公钥   三个文件。

    下面就是关键的地方了，（我们要做ssh认证。进行下面操作前，可以先搜关于认证和加密区别以及各自的过程。）

    ①在master上将公钥放到authorized_keys里。命令：sudo cat id_rsa.pub >> authorized_keys

    ②将master上的authorized_keys放到其他linux的~/.ssh目录下。

       命令：sudo scp authorized_keys kenfo@10.10.11.192:~/.ssh       

               sudo scp authorized_keys 远程主机用户名@远程主机名或ip:存放路径。

    ③修改authorized_keys权限，命令：chmod 644 authorized_keys

    ④测试是否成功

       ssh host2 输入用户名密码，然后退出，再次ssh host2不用密码，直接进入系统。这就表示成功了。
	   

  
4. 安装jdk

	下载 wget http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.tar.gz
	解压 sudo tar zxvf jdk-7u79-linux-x64.tar.gz -C /usr/lib/jvm
	进入目录	cd /usr/lib/jvm
	文件夹重命名为java 	sudo mv jdk-7u79-linux-x64 java 
	编辑文件添加下面代码  vi /etc/profile

		export JAVA_HOME=/usr/lib/jvm/java
		export JRE_HOME=$JAVA_HOME/jre
		export CLASSPATH=.:$CLASSPATH:$JAVA_HOME/lib:$JRE_HOME/lib
		export PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin

	生效  source /etc/profile

	测试 java
	
5.  安装传输工具 sudo apt-get install lrzsz
	
## 网络配置
	
	sudo vi /etc/network/interfaces
	# The primary network interface
	auto ens33
	iface ens33 inet static
	address 10.10.11.191
	gateway 10.10.11.2
	netmask 255.255.255.0
	dns-nameservers 10.10.11.2
	dns-search foo.org bar.com
	
## VM下实现局域网互联
	
1. VM选择nat方式上网
2. 右键VMnet8-属性-tcp/ip协议 把IP地址改为192.168.132(这个自己随便设1-224内的数字）.1 /255.255.255.0
3. 打开vm虚拟机，点左上方的编辑-虚拟网络设置-nat 虚拟机的DNS就是这里的网关IP地址192.168.132.2,这个vmnet8相当于局域网里的网关



