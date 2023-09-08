function animate(obj, target, callback) {
    // console.log(callback);,调用时callback（）
    //obj目标对象,target目标位置/
    clearInterval(obj.timer); //先清除以前的定时器，保证只有一个，
    obj.timer = setInterval(function() {

        // var step = Math.ceil((target - obj.offsetLeft) / 10); //计算步长,改为整数，不要小数
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step); //正数向上取整，负数向下取整
        if (obj.offsetLeft == target) {
            //停止计时器
            clearInterval(obj.timer);
            //回调函数写在定时器里
            // if (callback) {
            //     callback(); //如果有回调函数就调用
            // }
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}