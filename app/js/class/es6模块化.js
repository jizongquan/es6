/**
 * Created by Administrator on 2018/4/6.
 */
//模块化
//   第一种导出
//export let A=123;
//
//export function test(){
//    console.log('test')
//}
//
//export class Hello{
//    test(){
//        console.log('class')
//    }
//}


//第二种导出
let A=123;

function test(){
    console.log('test')
}

class Hello{
    test(){
        console.log('class')
    }
}
export default{
    A,test,Hello
}