# Oracle

## ORACLE时显示的中文为?
1. `select userenv('language') from dual;`
得到的服务器字符集为：SIMPLIFIED CHINESE_CHINA.ZHS16GBK
2. 设置环境变量
变量名：NLS_LANG
变量值：SIMPLIFIED CHINESE_CHINA.ZHS16GBK

## oracle数据库的字符集更改 

	[root@server183 /]# sqlplus /nolog 
	SQL*Plus: Release 11.2.0.1.0 Production on Wed Nov 7 23:50:56 2012 

	Copyright (c) 1982, 2010, Oracle.  All rights reserved. 

	SQL> conn / as sysdba     --需要使用SYSDBA帐户 

	Connected. 

	SQL>  startup mount        

	ORA-01081: cannot start already-running ORACLE - shut it down first 

	SQL>  shutdown immediate;   --停止数据库 

	Database closed. 

	Database dismounted. 

	ORACLE instance shut down. 

	SQL>  startup mount          --启动数据库到 mount 状态 

	ORACLE instance started. 

	 

	Total System Global Area 1686925312 bytes 

	Fixed Size                  2176368 bytes 

	Variable Size             989858448 bytes 

	Database Buffers          687865856 bytes 

	Redo Buffers                7024640 bytes 

	Database mounted. 

	 

	SQL> alter session set sql_trace=true; 

	Session altered. 

	 

	SQL>  alter system enable restricted session; 

	System altered. 

	 

	SQL> alter system set job_queue_processes=0; 

	System altered. 

	 

	SQL> alter system set aq_tm_processes=0; 

	System altered. 

	 

	SQL> alter database open; 

	Database altered. 

	 

	 

	SQL>  ALTER DATABASE character set INTERNAL_USE ZHS16GBK; --修改字符集AL32UTF8->ZHS16GBK 

	 

	Database altered. 

	 

	SQL> shutdown immediate;        --再次关闭数据库 

	Database closed. 

	Database dismounted. 

	ORACLE instance shut down. 

	SQL> STARTUP             --启动数据库 

	ORACLE instance started. 

	 

	Total System Global Area 1686925312 bytes 

	Fixed Size                  2176368 bytes 

	Variable Size             989858448 bytes 

	Database Buffers          687865856 bytes 

	Redo Buffers                7024640 bytes 

	Database mounted. 

	Database opened. 

	SQL> select * from v$nls_parameters where parameter = 'NLS_CHARACTERSET'; 

	 

	+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
	client端字符集修改 
	在 /home/oracle与 /root用户目录下的.bash_profile中 
	添加或修改 export NLS_LANG="AMERICAN_AMERICA.UTF8" 语句 
	关闭当前ssh窗口。 



## Orcale 11g 以上导入导出(exp不导出空表)

	SQL> create directory expdp_dir as 'D:\mzl\backup ';
	SQL> grant read,write on directory expdp_dir to test；

	从一个用户expdp导出再impdp导入到另一个用户 
	如果想导入的用户已经存在:
	1. 导出用户 expdp user1/pass1 directory=dumpdir dumpfile=user1.dmp
	2. 导入用户 impdp user2/pass2 directory=dumpdir dumpfile=user1.dmp REMAP_SCHEMA=user1:user2 EXCLUDE=USER full=y;
	如果想导入的用户不存在:
	1. 导出用户 expdp user1/pass1 directory=dumpdir dumpfile=user1.dmp
	2. 导入用户 impdp system/passsystem directory=dumpdir dumpfile=user1.dmp REMAP_SCHEMA=user1:user2 full=y;
	3. user2会自动建立，其权限和使用的表空间与user1相同，但此时用user2无法登录，必须修改user2的密码
来源：[http://blog.csdn.net/giianhui/article/details/7788550](http://blog.csdn.net/giianhui/article/details/7788550)

