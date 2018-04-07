/**
 * Created by Administrator on 2018/4/6.
 */
{
    //基本定义和生成实例
    class Parent{
        constructor(name="jizongquan"){
            this.name=name
        }
    }
    let v_parent=new Parent('v');
    console.log(v_parent)
}

{
    //继承
    class Parent{
        constructor(name="jizongquan"){
            this.name=name
        }
    }

    class  Child extends  Parent{

    }
    console.log('继承',new Child())
}

{
    //继承传递参数
    class Parent{
        constructor(name="jizongquan"){
            this.name=name
        }
    }

    class  Child extends  Parent{
        constructor(name='child'){
            super(name);//用super来传递改变父类的默认值,注意super是放在第一行
            this.type='child';
        }
    }
    console.log('继承',new Child())
}


{
    //getter,setter
    class Parent{
        constructor(name="jizongquan"){
            this.name=name
        }
        get longName(){
            return 'mk' +this.name
        }
        set longName(value){
            this.name=value
        }
    }
    let v = new Parent();
    console.log('getter',v.longName);
    v.longName='hello';
    console.log('setter',v.longName)
}

{
    //静态方法 是通过类调用而不是类的实例调用
    class Parent{
        constructor(name="jizongquan"){
            this.name=name
        }
        static tell(){
            console.log('tell')
        }
    }
    Parent.tell()
}

{
    //静态属性
    class Parent{
        constructor(name="jizongquan"){
            this.name=name
        }
        static tell(){
            console.log('tell')
        }
    }
    Parent.type='test'//直接在类上定义
    console.log(Parent.type)
}