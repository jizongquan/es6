/**
 * Created by Administrator on 2018/4/5.
 */
{
    //es6二进制表示方法是0b开头
    console.log(0b111110111);
    //es68进制
    console.log(0o767);
}

{
    //判断这个值是否在有效值内
    //Number.isFinite();
    console.log('15',Number.isFinite(15))
    console.log('NaN',Number.isFinite(NaN))
    console.log('1/0',Number.isFinite('true'/0))
    console.log('NaN',Number.isNaN(NaN))
}

{
    //判断是否为整数
    console.log('25',Number.isInteger(25))//true
    console.log('25.0',Number.isInteger(25.0))//true
}

{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)//是个常量最大最小
}

{
    //判断是否带小数的 再返回整数部分
    console.log(4.0,Math.trunc(4.1))
}

{
    //判断一个数是正数，负数还是0
    console.log('-5',Math.sign(-5))//-1
    console.log('0',Math.sign(0))//0
    console.log('+5',Math.sign(5))//1
}

{
    //立方根计算
    console.log('-1',Math.cbrt(-1))//-1
    console.log('8',Math.cbrt(8))//2
}