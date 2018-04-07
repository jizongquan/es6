/**
 * Created by Administrator on 2018/4/6.
 */
{
    //Decorator 修饰器用来修饰类的行为，修饰器首先是一个函数，修改类的行为gulp
    let readonly = function(targe,name,descriptor){
        descriptor.writable=false;
        return descriptor
    };

    class Test{
        @readonly
        time(){
            return '2018-03-11'
        }
    }
    let test =new Test();
    //test.time=function(){
    //    console.log('jizongquan');
    //};
    console.log(test.time());
}

{
    let typename = function(target,name,descriptor){
        target.myname='hello'
    };
    @typename
    class Test{

    }
    console.log(Test.myname)
    //第三方库修饰器的js库：core-decorators;npm install core-decorators
}