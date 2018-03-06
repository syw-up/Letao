;(function () {  
    $(function () { 
        var  page=1;

    function render() {     
        $.get('/category/queryTopCategoryPaging',{
            page:page,
            pageSize:5
        },function (info) { 
            //console.log(info);
            var  str=template('first-tmp',info);
            $('tbody').html(str);
            $('#pagenator').bootstrapPaginator({
                bootstrapMajorVersion:3,
                currentPage:page,
                numberOfPages:5,    
                totalPages:Math.ceil(info.total/info.size),
                onPageClicked:function (a,b,c,p) { 
                    page=p;
                    render();
                 }      
              
               }); 
            
         })
    }
      render();
        //添加分类
        $('.main_content>button').on('click',function () {  
            $('.modal').modal('show');
        })
        //表单验证
        $('form').bootstrapValidator({
            　　　　　  message: 'This value is not valid',
                        feedbackIcons: {
                            　　　　　　　　valid: 'glyphicon glyphicon-ok',
                            　　　　　　　　invalid: 'glyphicon glyphicon-remove',
                            　　　　　　　　validating: 'glyphicon glyphicon-refresh'
                        　　　　　　　　 },
                        fields: {
                           categoryName: {
                                message: '分类名称不能为空',
                                validators: {
                                    notEmpty: {
                                        message: '分类名称不能为空'
                                    }
                                }
                            }
                       
                        }
          });
     
        

    
    
    // $('.modal-body form').on('success.form.bv', function (e) {
      
    //     e.preventDefault();
    //     $.ajax({
    //         type:"POST",
    //         url:"/category/addTopCategory",
    //         data: $('form').serialize(),
    //         success:function (info) {
    //             console.log(info);
            
    //         }
    //       });
    // });
    var $form = $("form");
    $form.on("success.form.bv", function (e) {
        
        e.preventDefault();
    
        $.ajax({
          type:"POST",
          url:"/category/addTopCategory",
          data: $form.serialize(),
          success:function (info) {
            if(info.success){
                $('.modal').modal('hide');
                page=1;
                render();
                $('form').data("bootstrapValidator").resetForm(true);
            }
            
            
       
    
          }
        });
      })














     })//入口函数







})();