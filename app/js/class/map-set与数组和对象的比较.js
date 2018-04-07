/**
 * Created by Administrator on 2018/4/6.
 */
{
    //数据结构横向对比，增，查，改，删
    let map = new Map();
    let array=[];

    //增
    map.set('t',1);
    array.push({t:1});

    console.info('amp-array',map,array);

    //查
    let map_exist=map.has('t');//返回布尔值
    let array_exist=array.find(item=>item.t)//用find查遍历数组中的t、返回的是数值
    console.log(map_exist,array_exist)

    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.info(map,array)

    //删除
    map.delete('t');
    let index =array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info(map,array)
}

{
    //set和array的对比
    let set = new Set();
    let array=[]

    //增
    set.add({t:1});
    array.push({t:1});
    console.info(set,array)

    //查
    let set_exist= set.has({t:1});
    let array_exist=array.find(item=>item.t)//用find查遍历数组中的t、返回的是数值
    console.log(set_exist,array_exist);

    //改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.info(set,array)

    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index =array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info(set,array)
}

{
    //map,set,object对比
    let item={t:1};
    let map = new Map();
    let set = new Set();
    let obj={};

    //增
    map.set('t',1);
    set.add(item);
    obj['t']=1;
    console.info(map,set,obj)

    //查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    })

    //改
    map.set('t',2);
    item.t=2;
    obj['t']=2;
    console.info(map,set,obj);

    //删除
    map.delete('t');
    set.delete(item);
    delete  obj['t'];
    console.info(map,set,obj);



}