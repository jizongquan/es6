/**
 * Created by Administrator on 2018/4/5.
 */
{
    //Array of 是把一组数据变量转换成数据类型的作用
    let arr = Array.of(3,4,7,9,11);
    console.log('arr',arr);
}

{
    //Array from 把元素的集合转换成数组
    let p=document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent);
    });
    //Array from 还有映射作用
    console.log(Array.from([1,3,5],function(item){
        return item*2
    }));
}

{
    //填充数组的功能
    console.log('fill-7',[1,'a',undefined].fill(7))//里面都被替换成7
    console.log('fill,pos',['a','b','c'].fill(7,1,3))//['a',7,7]后面的1，3是起始位置
}

{
    //遍历相关
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index);//0,1,2 keys返回的是索引
    }
    for(let value of ['1','c','ks'].values()){
        console.log('values',value);//打印出对应值 正常浏览器不兼容
    }
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('entries',index,value);//即得到索引又得到值
    }
}


{
    //当前数组内部，把当前位置成员复制到其他位置
    console.log([1,2,3,4,5].copyWithin(0,3,4))//第一个参数从哪个位置开始替换，第二个参数替换的数据，最后一个参数结束的位置
}

{
    //查找find
    console.log([1,2,3,4,5,6].find(function(item){
        return item>3//find是找到第一个就可以了
    }))

    console.log([1,2,3,4,5,6].findIndex(function(item){
        return item>3//find是找到下标3
    }))
}

{
    console.log('number',[1,2,NaN].includes(1))//
}








