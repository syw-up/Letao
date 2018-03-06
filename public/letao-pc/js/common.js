;(function () { 
   $(function () { 
     //进度条功能
       NProgress.configure(
        { showSpinner: false }
       );
       $(document).ajaxStart(function () { 
             
           NProgress.start();
      })
      $(document).ajaxStop(function () {
        setTimeout(function () {
          NProgress.done();
         }, 500);
       });
    
       //验证功能
       if(window.location.href.indexOf('login.html') == -1){
        $.ajax({
          type:'get',
          url:'/employee/checkRootLogin',
          dataType:'json',
          success:function (info) { 
           // console.log(info);  
            if(info.error == 400){
              // window.location.href='login.html'
            }
            
           }
        })
       }
       
       //点击显示二级分类
       $('.nav li').eq(1).on('click',function () { 
      
           $(this).children('.second_ul').slideToggle();
        })

       //topbar点击功能
       $('.topbar a').eq(0).on('click',function () { 
        $('.aside').toggleClass('now');
        $('.aside').hasClass('now')?$('.main').css('paddingLeft',0):$('.main').css('paddingLeft','180px')
          
        })
       //点击退出功能
       $('.topbar a').eq(1).on('click',function () { 
        $('.modal').modal('show');

       });

        $('.sure_modal .btn-login').on('click',function () { 
          $.ajax({
            type:'get',
            url:'/employee/employeeLogout',
            dataType:'json',
            success:function (info) { 
               if(info.success){
                 window.location.href='login.html';
                  $('.modal').modal('hide');
                
               }
             
             }
          })
          
         })




    })//入口函数









 })();