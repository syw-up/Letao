;(function () { 
    var  title={
        index:'乐淘云购',
        category:'乐淘分类',
        cart:'购物车',
        login:'会员中心'
    }
   var hrefTitle=window.location.href.split('/')[4].split('.')[0];
   console.log(hrefTitle);
   
   var pageTitle=title[hrefTitle];
   console.log(pageTitle);
   //头部
   document.querySelector('.m_header').innerHTML = 
   '<a href="" class="icon_left"><span class="fa fa-home"></span></a>'+
   '<h3>'+pageTitle+'</h3>'+
   '<a href="" class="icon_right"><span class="fa fa-search"></span></a>'
 
    //底部
    // document.querySelector('.m_footer').innerHTML = 
    // '<a href="" class="icon_left"><span class="fa fa-home"></span></a>'+
    // '<h3>'+pageTitle+'</h3>'+
    // '<a href="" class="icon_right"><span class="fa fa-search"></span></a>'
  








 })()