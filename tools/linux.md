# Linux

## 常用命令
    df -hl                                  //查看磁盘空间使用情况  
    rm -rf xx                               //-f 删除文件  -rf删除文件夹  
    rename xx xx                            //文件重命名  
    ps -a                                   //查看进程  
    ps -ef|grep nginx                       //查看nginx经常  
    jps                                     //查看所有java进程  
    kill pid                                //杀死进程  
    tar -zxvf xxx.tar.gz -c /root/temp      //解压到xx地方  
    cp xx xx.bak                            //复制文件  
    cp -rfp /root/temp/xx  /usr/local       //将xx复制(替换)到/usr/local下面  
    touch xx                                //新建文件
    
#### lrzsz 上传下载命令

    yum install lrzsz  //安装
    rz filename //上传某个文件
    sz filename //下载某个文件
    
#### 网络设置
    ifconfig    //查看ip  
    ifconfig eth0 192.168.0.5 netmask 255.255.255.0   //设置网卡eth0的ip地址,子网掩码
    ifconfig eth0:1 192.168.0.6 broadcast 192.168.1.255 netmask 255.255.255.0 //虚拟主机ip设置    
    
    
#### screen工具命令

	screen -S screenName
	ctrl+a+d //最小化
	screen -ls //查看
	screen -r 1038  //进去
	ctrl+a+k //关掉
	screen -D  -r ＜session-id>  //状态为Attached的解决办法
    
## sudo 授权命令

	sudo chmod 600 ××× （只有所有者有读和写的权限）
	sudo chmod 644 ××× （所有者有读和写的权限，组用户只有读的权限）
	sudo chmod 700 ××× （只有所有者有读和写以及执行的权限）
	sudo chmod 666 ××× （每个人都有读和写的权限）
	sudo chmod 777 ××× （每个人都有读和写以及执行的权限）
