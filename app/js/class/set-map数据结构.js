/**
 * Created by Administrator on 2018/4/6.
 */
{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log('size',list.size);//长度为2
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
    console.log('size',list.size);
}

{
    //set元素不能重复
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('size',list);//可以利用set去重,但是不会做内部数据类型转换比如2和'2'不相等不会在内部转换

    var arr = [1,2,3,1,'2'];
    let list2 = new Set(arr);
    console.log(list2)
}

{
    //set移除 清空 判断
    let arr = ['add','delete','clean','has'];
    let list = new Set(arr);
    console.log('has',list.has('add'))
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('list',list)
}

{
    //set读取，遍历
    let arr = ['add','delete','clean','has'];
    let list = new Set(arr);

    for(let key of list.keys()){
        console.log('keys',key)
    }
    for(let value of list.values()){
        console.log('value',value)
    }
    for(let value of list){
        console.log('value',value)
    }
    for(let [key,value] of list.entries()){
        console.log('value',value,key)
    }

    //forEach
    list.forEach(function(item){
        console.log(item)
    })
}


{
    //WeakSet 和set支持的数据类型不一样 Weakset只能是对象不能是数组布尔等，是弱引用，不会检测是否被垃圾回收掉
    let  weakList = new WeakSet();//没有size,没有clear方法，不能遍历
    let arg = {};
    weakList.add(arg);//add,delete,has有这些方法
    console.log(arg);
}

{
    //遍历方法和set一样
    let map = new Map();
    let arr = ['123'];
    map.set(arr,456)//map添加元素用set，添加形式是key value
    console.log(map,map.get(arr))//map获取key用get
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log(map)
    console.log(map.size)//获取元素多少个也是用size
    console.log(map.delete('a'),map)//删除用delete
    console.log(map.clear(),map)//清空也是用clear
}

{
    let weakmap = new WeakMap();//接受key值必须是对象，没有size不能用clear，不能遍历和WeakSet等同
    let o = {};
    weakmap.set(o,123);//add,delete,has有这些方法
    console.log(weakmap.get(o));
}





