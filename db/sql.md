# SQL

##### 常用语句
创建表空间：  
```sql
create tablespace KDBASE_DATA datafile'/ora/oracle/oradata/UAS/KDBASE_DATA01.dbf'size 512M autoextend on;  
```
创建用户  
```sql
drop user KDBASE CASCADE;

-- Create the user 
create user KDBASE
identified by kdbase
  default tablespace KDBASE_DATA
  temporary tablespace TEMP
  profile DEFAULT;
grant connect to KDBASE;
grant resource to KDBASE;
-- Grant/Revoke system privileges 
grant create cluster to KDBASE;
grant create procedure to KDBASE;
grant create synonym to KDBASE;
grant create trigger to KDBASE;
grant create view to KDBASE;
grant delete any table to KDBASE;
grant drop any table to KDBASE;
grant insert any table to KDBASE;
grant select any table to KDBASE;
grant unlimited tablespace to KDBASE;
grant update any table to KDBASE;
```

