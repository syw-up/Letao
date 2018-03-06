;(function () {  
   $(function () { 
      var Page=1;
      var PageSize=20;
      function render(){
          $.get('/category/querySecondCategoryPaging',{
              page:Page,
              pageSize:PageSize
          },function (info) { 
              
              
              var str=template('second-tmp',info);
              $('tbody').html(str);
              $('#pagenator').bootstrapPaginator({
                bootstrapMajorVersion:3,
                currentPage:Page,
                numberOfPages:PageSize,
                totalPages:Math.ceil(info.total/info.size),
                onPageClicked:function (a,b,c,p) { 
                    Page=p;
                    render();
                    
                 }      
               });    
              
           })

      }
      render();
      //表单验证
      var $form = $("form");
      $form.bootstrapValidator({
        //小图标
        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
        //校验规则
        fields:{
          categoryId:{
            validators:{
              notEmpty:{
                message:'请选择一级分类'
              }
            }
          },
          brandName:{
            validators:{
              notEmpty:{
                message:'请输入品牌的名称'
              }
            }
          },
          brandLogo: {
            validators:{
              notEmpty:{
                message:'请上传品牌的图片'
              }
            }
          }
        },
        excluded:[]
      });
    
      //点击添加分类
    $('.main_content>button').on('click',function () {  
        $('.modal').modal('show');
    })
    $('.dropdown-toggle').on('click',function () { 
        $.ajax({
            type:'GET',
            url:"/category/queryTopCategoryPaging",
            data: {
              page:1,
              pageSize:100
            },
            success:function (info) {
              console.log(info);
              $('.dropdown-menu').html( template('list-tmp',info))
          
            }
          });
      
        });

      $('.dropdown-menu').on('click','a',function () {  
         $('.dropdown_text').text($(this).text());
         var id=$(this).parent().data('id');
         $('[name=categoryId]').val(id);
         $form.data("bootstrapValidator").updateStatus("categoryId", "VALID");
      })
       //图片上传
     $('#fileupload').fileupload({
        dataType: 'json',
        done: function (e, data) {
          var  pic=data.result.picAddr;
          console.log(pic);
          
          $('.img_box img').attr('src',pic);
          $('[name=brandLogo]').val(pic)
          $form.data("bootstrapValidator").updateStatus("brandLogo", "VALID");
          console.log(  $form.serialize()
         );
          
        }
    });
   
     //提交表单
     $form.on("success.form.bv", function (e) {
        e.preventDefault();
         
    
        $.ajax({
          type:'POST',
          url:"/category/addSecondCategory",
          data: $form.serialize(),
          success:function (info) {
             
            if(info.success) {
              //关闭模态框
              $("#secondModal").modal("hide");
              //重新渲染第一页
              page = 1;
              render();
    
              //重置样式
              $form.data("bootstrapValidator").resetForm(true);
              $(".dropdown_text").text("请选择一级分类");
              $(".img_box img").attr("src", "images/none.png");
            }
          }
        })
        
      })
 













    })//入口函数











})();