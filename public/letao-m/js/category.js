;(function () { 
    $(function () { 
       $.get('/category/queryTopCategory',function (info) {  
           console.log(info);
           var str=template('cate-tmp',info);
           $('.left-nav').html(str);  
            var id=info.rows[0].id;
            render(id)
        })








        //二级分类
        $('.aside_nav ul').on('click','li',function () { 
            $(this).addClass('active').siblings().removeClass('active');
            mui('.product_show .mui-scroll-wrapper').scroll().scrollTo(0,0,100)
             var id=$(this).data('id');
             render(id);
             
          
        })
     
         function render(id){
            $.get('/category/querySecondCategory',{id:id},function (info) { 
               var str=template('second-tmp',info);
              
               $('.right-nav').html(str)    
            })

         }
         





     })

 })();