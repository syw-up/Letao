;(function () { 
    var  title={
        index:'乐淘云购',
        category:'乐淘分类',
        cart:'购物车',
        login:'会员中心',
        search:'搜索中心',
        searchlist:'商品列表'
}

 var  hrefTitle=location.pathname.split( '/' ).pop().split( '.' )[ 0 ];
   
 if( hrefTitle == null){
    hrefTitle=='index';
   }
   
   var pageTitle=title[hrefTitle];
 

   //头部
if( hrefTitle=='index'||hrefTitle =='category'||hrefTitle=='cart'||hrefTitle=='login'||pageTitle == undefined){
   if(pageTitle==undefined) {
        pageTitle="乐淘云购"
       }
   document.querySelector('.m_header').innerHTML = 
   '<a href="" class="icon_left">'+'<span class="fa fa-home"></span></a>'+
   '<h3>'+pageTitle+'</h3>'+
   '<a href="./search.html" class="icon_right"><span class="fa fa-search"></span></a>'
   
   }
 else{ 
 
   document.querySelector('.m_header').innerHTML = 
   '<a href="./search.html" class="icon_left"><span class="mui-icon mui-icon-arrowleft"></span></a>'+
   '<h3>'+pageTitle+'</h3>'+
   '<a href="" class="icon_right"><span class="fa "></span></a>'
 }




    //底部
    document.querySelector('.m_footer').innerHTML =   
    '<ul>'+
    '<li class="active" data-type="index">'+
        '<a href="./index.html" >'+
            '<span class="fa  fa-home"></span>'+
            '<p>首页</p>'+
        '</a>'+
    '</li>'+
    '<li data-type="category">'+
            '<a href="./category.html">'+
                '<span class="fa  fa-bars"></span>'+
                '<p>分类</p>'+
            '</a>'+
    '</li>'+
    '<li data-type="cart"><a href="./cart.html"> <span class="fa  fa-shopping-cart"></span><p>购物车</p></a>  </li>'+
    '<li data-type="login"> <a href="">  <span class="fa  fa-user"></span> <p>会员中心</p></a></li>'+ 
    '</ul>'


   





 })()