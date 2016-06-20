# Docker
  Docker��һ����Դ��Ӧ���������棬�ÿ����߿��Դ�����ǵ�Ӧ���Լ���������һ������ֲ�������У�Ȼ�󷢲����κ����е� Linux �����ϣ�Ҳ����ʵ�����⻯
  
 

## ��װ

��װ�̳�:https://docs.docker.com/engine/installation/linux/ubuntulinux/
**ubuntu 16.04 64λ��Ĭ�ϰ�װ**

1.���GPG key��

	$sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

2.���Դ

	�½��ļ���/etc/apt/sources.list.d/docker.list��������������ݣ�  
	deb https://apt.dockerproject.org/repo ubuntu-xenial main

3.����Դ

	$ sudo apt-get update

4.��װ�����

	$ sudo apt-get install docker-engine
	$ sudo service docker start 
	$ sudo docker run hello-world

5. ���ÿ�������

	$ sudo systemctl enable docker

	
## ����

#### Docker�����������

	#service docker start    //����
	#service docker restart  //����
	#service docker stop    //ֹͣ
	Docker�����Ӧ�İ汾�鿴
	# sudo docker version
	Docker�����鿴
	#sudo docker info
	
#### Docker�������

	#sudo docker  //�鿴docker����������
	#sudo docker command --help  //�鿴����docker����İ�������docker ru--help
	
#### Docker�����������

