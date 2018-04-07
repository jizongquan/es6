/**
 * Created by Administrator on 2018/4/5.
 */
{
    //es5
    console.log('a',`\u0061`);
    console.log('s',`\u20BB7`);
    console.log('s',`\u{20BB7}`);
}

{
    //es5
    let s ='𠮷?';
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0',s.charCodeAt(0));
    console.log('at1',s.charCodeAt(1));
    //es6
    let s1 ='𠮷?';
    console.log('length',s1.length);
    console.log('code0',s1.codePointAt(0));
    console.log('code1',s1.codePointAt(0).toString(16));
}

{
    //es5
    console.log(String.fromCharCode('0x20bb7'));
    //es6
    console.log(String.fromCodePoint('0x20bb7'))

}

{
    //es5
    let str = '\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i])
    }
    //es6
    for(let code of str){
        console.log('es6',code)
    }

}

{
    //判断字符串中是否含有那个字符
    let str='string';
    console.log('includes',str.includes('r'))//返回ture

    //判断字符串以哪些起始的，以什么结束的
    console.log('start',str.startsWith('str'))//返回ture
    console.log('end',str.endsWith('ng'))//返回ture
}

{
    //将字符串重复两次
    let str='abc';
    console.log(str.repeat(2))//abcabc
}

{
    let name='list';
    let info = 'hello world';
    let m=`i am ${name},${info}`;
    console.log(m)
}

{
    console.log('1'.padStart(2,'0'));//第一个参数是长度，第二个事如果不够就补白 01
    console.log('1'.padEnd(2,'0'));//10
}

{
    //标签模板 可以处理多语言，但是不是很常用
    let user={
        name:'list',
        info:'hellow world'
    }
    console.log(abc`i am ${user.name},${user.info}`)
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s +v1 + v2
    }
}

{
    //可以不换行
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`)
}