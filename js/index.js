


var swiper = new Swiper('.swiper-container',{
    direction : 'vertical',
    //effect:'coverflow',//翻页样式
    //loop : true  //循环翻页
    loop : false  //不循环翻页
});
//弹出窗口------------------------------------------------------
$(function(){

    var oAnniu = $('.anniu');
    var oTankuang = $('.tankuang1');

    oAnniu.on('click', function(){
        oTankuang.fadeIn();
    });
    oTankuang.on('click', function(){
        oTankuang.fadeOut();
    });

});


























//showMusic();
//function showMusic(){
//    var $music = $('#music');
//    var $audio1 = $('#audio1');
//    var onoff = true;
//    $music.on('touchstart',function(){
//        if(onoff){
//            $(this).attr('class','active');
//            $audio1.get(0).play();
//        }
//        else{
//            $(this).attr('class','');
//            $audio1.get(0).pause();
//        }
//        onoff = !onoff;
//    });
//    $music.trigger('touchstart');
//
//}