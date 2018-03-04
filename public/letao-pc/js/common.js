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
            console.log(info);  
            if(info.error == 400){
              window.location.href='login.html'
            }
            
           }
        })
       }











    })//入口函数









 })();