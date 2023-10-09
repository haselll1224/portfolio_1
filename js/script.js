//よくある質問 
$(function(){
  // 初期値は１つ目のQAだけ
  $('dd[id != "acc1"]').hide();

  $('dt a').click(function(){

    var id =$(this).attr("href");
    $(id).slideToggle(300);

    return false;
  });



  // $('.swiper-slide *').removeAttr('style')


  // ハンバーガーメニュー
  $('#humberger').click(function(){
    $('.humberger-menu').fadeIn(200);
    $('body').css('overflow', 'hidden');

    // 背景暗く
    $('.dark').show();
  });

  $('.close').click(function(){
    $('.humberger-menu').fadeOut(200);
    $('body').css('overflow', 'visible');

    // 背景暗く解除
    $('.dark').hide();
  });

  $('.dark').click(function(){
    $('.humberger-menu').fadeOut(200);
    $('body').css('overflow', 'visible');

    // 背景暗く解除
    $('.dark').hide();
  });
});