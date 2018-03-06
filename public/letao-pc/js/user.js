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
                  $('#pagenator').bootstrapPaginator({
                    bootstrapMajorVersion:3,
                    currentPage:1,
                    numberOfPages:5,
                    totalPages:Math.ceil(info.total/info.size),
                    onPageClicked:function (a,b,c,p) { 
                        
                     }      
                  
                   });    
               }
          })
         }
       render();
       //点击模态框事件
       var  id;
       var  isDelete;
       $('.main_content tbody ').on('click','button',function () {  
         $('.modal').modal('show');
         id=$(this).parent().data('id');

          if($(this).hasClass('btn-success')){
              isDelete=1;
            }else{
              isDelete=0;
         }    
         
       })
       
       //确认功能
       $('.btn_sure').on('click',function () {      
           $.post('/user/updateUser',{
               id:id,
               isDelete:isDelete
           },function (info) { 
                render();
                $('.modal').modal('hide');
               
            })
        })

 






    })
})()