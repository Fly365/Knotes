# DB2

su db2inst1 切换用户  
db2licm -l  查看到db2的license信息  
可以找一个永久的license添加到db2数据库即可   
把db2ese_c.lic放到一目录下：   
/opt/ibm/db2/V9.1/license/db2ese_c.lic   
在/opt/IBM/db2/V9.1/adm/目录下执行   
db2licm -a /opt/ibm/db2/V9.1/license/db2ese_c.lic   
执行后显示：LIC1402I License added successfully.  