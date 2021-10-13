
// 配置rem自适应，这没有用到rem自适应，有需要的可以引入
function remSize(){
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if(deviceWidth >= 750){
        deviceWidth = 750;
    }
    if(deviceWidth <=320){
        deviceWidth = 320;
    }
    document.documentElement.style.fontSize = (deviceWidth/7.5) + 'px';

}
remSize();

window.onresize = function(){
    remSize();
}