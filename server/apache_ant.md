# Apache ANT

## 安装

* 解压ant安装包在D:\SWE下
* 环境变量配置
>	`ANT_HOME D:\SWE\apache-ant-1.8.4`
	`CLASSPATH ;%ANT_HOME%lib;`
	`PATH  ;%ANT_HOME%bin;`

* 测试是否安装成功
>	`ant -version`

在项目根目录新建build.xml文件，然后执行ant命令打包项目

```xml  
<?xml version="1.0" encoding="UTF-8"?>  
  
<!-- 定义一个工程，默认任务为archive。 -->  
<project name="kibh" default="archive" basedir=".">  
	<!-- set properties name --> 
	<property name="tomcat.lib"   value="E:\tomcat\apache-tomcat-7.0.63-18084\lib" /> 
	<property name="jre.lib"   value="E:\jdk1.7.0_17\jre\lib" />
	
    <!-- 定义属性，打成war包的名称。 -->  
    <property name="warFileName" value="kibh.war"></property>  
      
    <!-- 定义路径，编译java文件时用到的jar包。 -->  
    <path id="project.lib">  
        <fileset dir="${basedir}/webapp/WEB-INF/lib">  
            <include name="**/*.jar"/>  
        </fileset>
    	<fileset dir="${tomcat.lib}">
    		<include name="*.jar"/>
    	</fileset>
    	<fileset dir="${jre.lib}">
    		<include name="**/*.jar"/>
    	</fileset>
    </path>  
      
    <!-- 定义任务，清空任务：清空原有的class文件，创建新的build路径。 -->  
    <target name="clean">  
        <delete dir="${basedir}/build" />  
        <mkdir dir="${basedir}/build" />  
    </target>  
      
    <!-- 定义任务，编译src文件夹中的java文件，编译后的class文件放到创建的文件夹下。 -->  
    <target name="compile" depends="clean">  
        <javac srcdir="${basedir}/src" destdir="${basedir}/build" includeantruntime="false" encoding="utf-8">  
            <classpath refid="project.lib">  
            </classpath>  
        </javac>  
    </target>  
      
    <!-- 定义默认任务，将class文件集合成jar包。 -->  
    <target name="archive" depends="compile">  
        <!-- 删除原有war包。 -->  
        <delete dir="${basedir}/${warFileName}" />  
        <!-- 建立新war包。 -->  
        <war destfile="${basedir}/${warFileName}" webxml="${basedir}/Webapp/WEB-INF/web.xml">  
            <!-- 将非jar和非class文件拷贝到war包的对应路径下。 -->  
            <fileset dir="${basedir}/webapp">  
                <include name="**/**.*" />  
                <exclude name="**/*.jar"/>  
                <exclude name="**/*.class"/>  
            </fileset>
        	<fileset dir="${basedir}/webapp/WEB-INF/classes">  
                <include name="动态链接库/**.*" /> 
            </fileset>
            <!-- 将jar和class文件拷贝到war包的对应路径下。 -->  
            <lib dir="${basedir}/webapp/WEB-INF/lib" />  
            <classes dir="${basedir}/build" />  
        </war>  
    </target>  
      
</project>  
```

    