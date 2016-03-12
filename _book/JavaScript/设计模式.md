[TOC]
# 设计模式
## 1.单例模式
#### 1.1 懒汉模式 
*（类加载时不初始化）*
>		package Singleton;
		public class LazySingleton {
		    //懒汉式单例模式
		    //比较懒，在类加载时，不创建实例，因此类加载速度快，但运行时获取对象的速度慢
		    private static LazySingleton intance = null;//静态私用成员，没有初始化
		    private LazySingleton()
		    {
		        //私有构造函数
		    }
		    public static synchronized LazySingleton getInstance()    //静态，同步，公开访问点
		    {
		        if(intance == null)
		        {
		            intance = new LazySingleton();
		        }
		        return intance;
		    }
		}

>>		<?php
		class User {
		    //静态变量保存全局实例
		    private static $_instance = null;
		    //私有构造函数，防止外界实例化对象
		    private function __construct() {
		    }
		    //私有克隆函数，防止外办克隆对象
		    private function __clone() {
		    }
		    //静态方法，单例统一访问入口
		    static public function getInstance() {
		        if (is_null ( self::$_instance ) || isset ( self::$_instance )) {
		            self::$_instance = new self ();
		        }
		        return self::$_instance;
		    }
		    public function getName() {
		        echo 'hello world!';
		    }
		}
		?>

#### 1.2 饿汉模式
*（在类加载时就完成了初始化，所以类加载较慢，但获取对象的速度快）*
>		package Singleton;
		public class EagerSingleton {
		    //饿汉单例模式
		    //在类加载时就完成了初始化，所以类加载较慢，但获取对象的速度快
		    private static EagerSingleton instance = new EagerSingleton();//静态私有成员，已初始化
		    private EagerSingleton() 
		    {
		        //私有构造函数
		    }
		    public static EagerSingleton getInstance()    //静态，不用同步（类加载时已初始化，不会有多线程的问题）
		    {
		        return instance;
		    }
		}


## 2.工厂模式
#### 2.1 简单工厂模式（Simple Factory）
*不利于产生系列产品*
>			//抽象产品角色
			public interface Moveable {
			    void run();
			}
			//具体产品角色
			public class Plane implements Moveable {
			    @Override
			    public void run() {
			        System.out.println("plane....");
			    }
			}
			public class Broom implements Moveable {
			    @Override
			    public void run() {
			        System.out.println("broom.....");
			    }
			}
			//抽象工厂
			public abstract class VehicleFactory {
			    abstract Moveable create();
			}
			//具体工厂
			public class PlaneFactory extends VehicleFactory{
			    public Moveable create() {
			        return new Plane();
			    }
			}
			public class BroomFactory extends VehicleFactory{
			    public Moveable create() {
			        return new Broom();
			    }
			}
			//测试类
			public class Test {
			    public static void main(String[] args) {
			        VehicleFactory factory = new BroomFactory();
			        Moveable m = factory.create();
			        m.run();
			    }
			}


#### 2.2 工厂方法模式（Factory Method）
*又称为多形性工厂*
>			//抽象产品角色
			public interface Moveable {
			    void run();
			}
			//具体产品角色
			public class Plane implements Moveable {
			    @Override
			    public void run() {
			        System.out.println("plane....");
			    }
			}

			public class Broom implements Moveable {
			    @Override
			    public void run() {
			        System.out.println("broom.....");
			    }
			}

			//抽象工厂
			public abstract class VehicleFactory {
			    abstract Moveable create();
			}
			//具体工厂
			public class PlaneFactory extends VehicleFactory{
			    public Moveable create() {
			        return new Plane();
			    }
			}
			public class BroomFactory extends VehicleFactory{
			    public Moveable create() {
			        return new Broom();
			    }
			}
			//测试类
			public class Test {
			    public static void main(String[] args) {
			        VehicleFactory factory = new BroomFactory();
			        Moveable m = factory.create();
			        m.run();
			    }
			}


#### 2.3 抽象工厂模式（Abstract Factory）
*又称为工具箱，产生产品族，但不利于产生新的产品*
>			//抽象工厂类
			public abstract class AbstractFactory {
			    public abstract Vehicle createVehicle();
			    public abstract Weapon createWeapon();
			    public abstract Food createFood();
			}
			//具体工厂类，其中Food,Vehicle，Weapon是抽象类，
			public class DefaultFactory extends AbstractFactory{
			    @Override
			    public Food createFood() {
			        return new Apple();
			    }
			    @Override
			    public Vehicle createVehicle() {
			        return new Car();
			    }
			    @Override
			    public Weapon createWeapon() {
			        return new AK47();
			    }
			}
			//测试类
			public class Test {
			    public static void main(String[] args) {
			        AbstractFactory f = new DefaultFactory();
			        Vehicle v = f.createVehicle();
			        v.run();
			        Weapon w = f.createWeapon();
			        w.shoot();
			        Food a = f.createFood();
			        a.printName();
			    }
			}


[^1]:text