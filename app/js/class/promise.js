/**
 * Created by Administrator on 2018/4/6.
 */
{
    //promise是异步编程的解决方案
    //基本定义
    let ajax = function(callback){
        console.log('执行')
        setTimeout(function(){
            callback && callback.call()
        },1000)
    };
    ajax(function(){
        console.log('aa')
    })
}

{
    //promise基本调用
    let ajax = function(){
        console.log('执行2');
        //resolve是要执行下一步操作， reject要中断操作
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },1000)
        })
    }
    ajax().then(function(){
        console.log('jizongquan')
    })
}

{
    let ajax = function(){
        console.log('执行3');
        //resolve是要执行下一步操作， reject要中断操作
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },1000)
        })
    }
    ajax().then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },2000)
        })
    }).then(function(){
        console.log('3');
    })
}


{
    //执行中间出错用catch
    let ajax = function(num){
        console.log('zhixing4');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve()
            }else{
                throw  new Error('出错了')
            }
        })
    };
    ajax(6).then(function(){
        console.log(6)
    }).catch(function(err){
        console.log(err)
    })
}

{
    //所有图片加载完再添加页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img)
            }
            img.onerror=function(err){
                reject(err)
            }
        })
    }

    function  showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }

    Promise.all([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://i2.muimg.com/567571/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
}

{
    //有一个图片加载完再就加页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img)
            }
            img.onerror=function(err){
                reject(err)
            }
        })
    }

    function  showImgs(img){
        let p =document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://i2.muimg.com/567571/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
}