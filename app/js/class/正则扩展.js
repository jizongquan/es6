/**
 * Created by Administrator on 2018/4/5.
 */
{
    //es5
    let regex = new RegExp('xyz','i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('xyz123'));

    //es6 flags新增检测修饰符的
    let regex3 = new RegExp(/xyz/ig,'i');
    console.log(regex3.flags);//i
}

{
    let s ='bbb_bb_b';
    let a1=/b+/g;
    //let a2=/b+/y;
    console.log('one',a1.exec(s))
}
