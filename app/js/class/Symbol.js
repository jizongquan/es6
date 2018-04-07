/**
 * Created by Administrator on 2018/4/5.
 */
{
    //Symbol数据类型新加的es6
    //提供一个独一无二的值
    //声明
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1===a2);//false
    let a3 = Symbol.for('a3');//symbol.for检测是否有声明a3这个变量
    let a4 = Symbol.for('a3');
    console.log(a3===a4);//true
}

{
    //使用
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log('obj',obj);
    for(let [key,value] of Object.entries(obj)){
        console.log(key,value)//拿不动Synbol的key值
    };
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);
    })//得到的是数组可以拿到symbol
    Reflect.ownKeys(obj).forEach(function(item){
        console.log(item,obj[item]);
    })//能拿到所有的值
}