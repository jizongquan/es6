/**
 * Created by Administrator on 2018/4/5.
 */
{
    let a,b,rest;
    //数组解构
    [a,b]=[1,2];
    console.log(a,b);
}

{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest)
}

{
    let a,b;
    //对象解构
    ({a,b}={a:1,b:2})
    console.log(a,b)
}

{
    function f(){
        return [1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);//1,2
}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b)//1,4
}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,...b]=f();
    console.log(a,b)//1,2345
}

{
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q)
}

{
    let metaData={
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]} = metaData;
    console.log(esTitle,cnTitle)
}