/**
 * Created by Administrator on 2018/4/5.
 */
function test(){
    for(let i=1;i<3;i++){
        //块级作用域
        console.log(i);
    }
}

test();

function last(){
    const  PI = 3.1415926;
    const  k ={
        a:1
    }
    k.b=6;
    console.log(PI,k)
}
last();