
�̳� http://www.cnblogs.com/laov/p/3421479.html

1. ����VM��ubuntu server
2. ��װ�����
3. ����ssh����
	sudo apt-get install openssh-server
	
	���ssh������״̬
	ps -s | grep ssh
	
	��������ssh����
	service ssh start
	/etc/init.d/ssh start
	
	�������ֱ�Ϊ��master��host2��host3��host4��
    sudo vim /etc/hostname
	
	�޸�/etc/hosts�ļ���
    �޸�ÿ̨���Ե�hosts�ļ�
    ��ÿ̨linux�ϣ�sudo vim /etc/hosts ��дhosts�ļ�
	
	
## ssh�������¼

�������½��Ч��Ҳ������master�ϣ�ͨ�� ssh host2 �� ssh host3 �� ssh host4 �Ϳ��Ե�½���Է�������ϡ����Ҳ����������롣

    ��̨������ϣ�ʹ��   ssh-keygen -t rsa    һ·���س������ˡ�

    �ղŶ��������أ���Ҫ������ssh����Կ����Կ�Ĵ��·���� ·��Ϊ~/.ssh�¡�

    ��~/.ssh �����������ļ�

    authorized_keys������֤��keys

    id_rsa��˽Կ

    id_rsa.pub����Կ   �����ļ���

    ������ǹؼ��ĵط��ˣ�������Ҫ��ssh��֤�������������ǰ���������ѹ�����֤�ͼ��������Լ����ԵĹ��̡���

    ����master�Ͻ���Կ�ŵ�authorized_keys����sudo cat id_rsa.pub >> authorized_keys

    �ڽ�master�ϵ�authorized_keys�ŵ�����linux��~/.sshĿ¼�¡�

       ���sudo scp authorized_keys kenfo@10.10.11.192:~/.ssh       

               sudo scp authorized_keys Զ�������û���@Զ����������ip:���·����

    ���޸�authorized_keysȨ�ޣ����chmod 644 authorized_keys

    �ܲ����Ƿ�ɹ�

       ssh host2 �����û������룬Ȼ���˳����ٴ�ssh host2�������룬ֱ�ӽ���ϵͳ����ͱ�ʾ�ɹ��ˡ�
	   

  
4. ��װjdk

	���� wget http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.tar.gz
	��ѹ sudo tar zxvf jdk-7u79-linux-x64.tar.gz -C /usr/lib/jvm
	����Ŀ¼	cd /usr/lib/jvm
	�ļ���������Ϊjava 	sudo mv jdk-7u79-linux-x64 java 
	�༭�ļ�����������  vi /etc/profile

		export JAVA_HOME=/usr/lib/jvm/java
		export JRE_HOME=$JAVA_HOME/jre
		export CLASSPATH=.:$CLASSPATH:$JAVA_HOME/lib:$JRE_HOME/lib
		export PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin

	��Ч  source /etc/profile

	���� java
	
5.  ��װ���乤�� sudo apt-get install lrzsz
	
## ��������
	
	sudo vi /etc/network/interfaces
	# The primary network interface
	auto ens33
	iface ens33 inet static
	address 10.10.11.191
	gateway 10.10.11.2
	netmask 255.255.255.0
	dns-nameservers 10.10.11.2
	dns-search foo.org bar.com
	
## VM��ʵ�־���������
	
1. VMѡ��nat��ʽ����
2. �Ҽ�VMnet8-����-tcp/ipЭ�� ��IP��ַ��Ϊ192.168.132(����Լ������1-224�ڵ����֣�.1 /255.255.255.0
3. ��vm������������Ϸ��ı༭-������������-nat �������DNS�������������IP��ַ192.168.132.2,���vmnet8�൱�ھ������������



