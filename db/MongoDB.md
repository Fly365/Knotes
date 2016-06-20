# MongoDB

	MongoDB是一个介于关系数据库和非关系数据库之间的产品,是非关系数据库当中功能最丰富,最像关系数据库的

#### 下载
[https://www.mongodb.org/downloads](https://www.mongodb.org/downloads)

#### 安装与启动

* 将zip包解压到d:\mongodb
* 创建数据库文件的存放位置，比如d:/mongodb/data/db
* 在d:\mongodb新建文件mongo.config

	用记事本打开mongo.config输入：
	dbpath=D:\mongodb\data\db
	logpath=D:\mongodb\log\mongo.log

* `D:\mongodb\bin>mongod --config D:\mongodb\mongo.config --serviceName MongoDB -install`启动并注册成服务*

* 启动服务 `net start MongoDB`

#### web管理工具[RockMongo](https://github.com/xxg3053/rockmongo.git)

需要php5支持mongoDB，下载php_mongo.dll 放到ext目录下，修改php.ini，添加 `extension=php_mongo.dll`

访问RockMongo 默认账户密码：admin/admin

#### nodejs

安装 `npm  install mongodb`

连接代码： 

	var  mongodb = require('mongodb');
	var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
	var  db = new mongodb.Db('mydb', server, {safe:true});

	//连接db
	db.open(function(err, db){
	    if(!err){
	        console.log('connect db');
	        // 连接Collection（可以认为是mysql的table）
	        // 第1种连接方式
	        // db.collection('mycoll',{safe:true}, function(err, collection){
	        //     if(err){
	        //         console.log(err);
	        //     }
	        // });
	        // 第2种连接方式
	        db.createCollection('mycoll', {safe:true}, function(err, collection){
	            if(err){
	                console.log(err);
	            }else{
	                //新增数据
	                // var tmp1 = {id:'1',title:'hello',number:1};
	       //          collection.insert(tmp1,{safe:true},function(err, result){
	       //              console.log(result);
	       //          }); 
	                   //更新数据
	                   // collection.update({title:'hello'}, {$set:{number:3}}, {safe:true}, function(err, result){
	                   //     console.log(result);
	                   // });
	                   // 删除数据
	                       // collection.remove({title:'hello'},{safe:true},function(err,result){
	        //                   console.log(result);
	        //               });

	                // console.log(collection);
	                // 查询数据
	                var tmp1 = {title:'hello'};
	                   var tmp2 = {title:'world'};
	                   collection.insert([tmp1,tmp2],{safe:true},function(err,result){
	                   console.log(result);
	                   }); 
	                   collection.find().toArray(function(err,docs){
	                   console.log('find');
	                   console.log(docs);
	                   }); 
	                   collection.findOne(function(err,doc){
	                    console.log('findOne');
	                      console.log(doc);
	                   }); 
	            }

	        });
	        // console.log('delete ...');
	        // //删除Collection
	        // db.dropCollection('mycoll',{safe:true},function(err,result){

	  //           if(err){
	                
	        //         console.log('err:');
	        //         console.log(err);
	        //     }else{
	        //         console.log('ok:');
	        //         console.log(result);
	        //     }
	  //       }); 
	    }else{
	        console.log(err);
	    }
	});


## ubuntu 下安装
`apt-get install mongodb`
`nano /etc/mongodb.conf`修改配置

	port=27017  
	dbpath=data/db  
	logpath=log/mongodb.log  
	logappend=true  
	fork=true 

`mongod -f /etc/mongodb.conf`以配置文件方式启动
`/bin/mongod --dbpath=/data/db --fork --logpath=/var/log/mongodb/mongodb.log `后台启动