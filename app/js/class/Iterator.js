/**
 * Created by Administrator on 2018/4/6.
 */
{
    //Iterator；for..of就是不断调用Iterator接口来实现
    let arr=['hello','world'];
    let map =arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    //自定义部署接口方法next方法必须有
    let obj={
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator](){
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {
                next(){
                    if(index<len){
                        return{
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return{
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key)
    }
}