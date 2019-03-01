$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    // 实现手势滑动切换上一张和下一张
    var startX = 0;
    var endX = 0;
    // 从左往右滑   上一张  滑动距离为正
    $('#slide').on('touchstart',function(e){
      startX = e.originalEvent.touches[0].clientX;
    })
    // 从右往左滑   下一张  滑动距离为负
    $('#slide').on('touchend',function(e){
      endX = e.originalEvent.changedTouches[0].clientX;
      if(endX>startX){
        $('.carousel').carousel('prev');
      }else if(endX<startX){
        $('.carousel').carousel('next');
      }else {
        
      }
    })
  })