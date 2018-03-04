;(function () { 
   $(function () { 

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
    











    })//入口函数









 })();