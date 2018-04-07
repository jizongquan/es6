/**
 * Created by Administrator on 2018/4/6.
 */
{
    //Proxy代理商，Reflect反射的作用反射的是object;这两个方法类似
    let obj = {
        time:'2017-03-11',
        name:'net',
        _r:123
    };
    let monitor = new Proxy(obj,{
        //拦截对象属性的读取target指的就是obj这个对象，key就是属性
        get(target,key){
            return target[key].replace('2017','2018')//将obj里面的值为2017的替换成2018，不管是什么属性
        },
        //拦截对象设置属性target指的就是obj这个对象，key就是属性，value就是值
        set(target,key,value){
            if(key==='name'){
                return target[key]=value
            }else{
                return target[key]
            }
        },
        //判断当前是否有这个属性，拦截key in object操作
        has(target,key){
            if(key==='name'){
                return target[key]
            }else{
                return false;
            }
        },
        //拦截delete
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true
            }else{
                return target[key]
            }
        },
        //拦截object。keys，object。getOwnPropertySymbols，Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time')
        }
    });
    console.log('get',monitor.time)
    monitor.time='2018';
    monitor.name='jizongquan';
    console.log('set',monitor.name)
    console.log('has','name' in monitor,'time' in monitor)//true false 如果不设置通过拦截用户就不知道是不是这个属性
    //delete  monitor.time;
    //console.log('delete',monitor)
    //delete  monitor._r;
    //console.log('delete',monitor)
    console.log('ownkeys',Object.keys(monitor))
}

{
    //Reflect直接取不用new
    let obj = {
        time:'2017-03-11',
        name:'net',
        _r:123
    };
    console.log('Reflect get',Reflect.get(obj,'time'));
    Reflect.set(obj,'name','jizongquan')
    console.log(obj)
    console.log(Reflect.has(obj,'name'))//true
}

{
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va =this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`不能设置${key}到${value}`)
                    }
                }else{
                    throw Error(`${key}不存在`)
                }
            }
        })
    };

    const personValidators={
        name(val){
            return typeof  val ==='string'
        },
        age(val){
            return typeof  val ==='number' && val>18
        }
    };

    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
            return validator(this,personValidators)
        }
    };

    const  person = new Person('jizongquan',30);
    console.log(person)
}
