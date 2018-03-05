;(function () {  
    $(function () {  
       //渲染页面
       var  page=1;
       function render(){
          $.ajax({
              type:'get',
              url:'/user/queryUser',
              data:{
                  page:page,
                  pageSize:5
              },
              dataType:'json',
              success:function (info) { 
                  console.log(info);
                  var str=template('user-tmp',info);
                  $('tbody').html(str);        
               }
          })
         }
       render();






    })
})()